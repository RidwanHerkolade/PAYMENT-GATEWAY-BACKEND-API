import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { message: "Paystack secret key is not configured" },
        { status: 500 },
      );
    }

    // 1. Read the raw webhook body
    const rawBody = await request.text();

    // 2. Get Paystack's signature
    const signature = request.headers.get(
      "x-paystack-signature",
    );

    if (!signature) {
      return NextResponse.json(
        { message: "Missing webhook signature" },
        { status: 401 },
      );
    }

    // 3. Create the signature we expect
    const expectedSignature = crypto
      .createHmac("sha512", secretKey)
      .update(rawBody)
      .digest("hex");

    // 4. Safely compare signatures
    const expectedBuffer = Buffer.from(
      expectedSignature,
      "utf8",
    );

    const receivedBuffer = Buffer.from(
      signature,
      "utf8",
    );

    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !crypto.timingSafeEqual(
        expectedBuffer,
        receivedBuffer,
      )
    ) {
      return NextResponse.json(
        { message: "Invalid webhook signature" },
        { status: 401 },
      );
    }

    // 5. Parse the verified event
    const event = JSON.parse(rawBody);

    // 6. We only process successful charges
    if (event.event !== "charge.success") {
      return NextResponse.json(
        { message: "Event ignored" },
        { status: 200 },
      );
    }

    const transaction = event.data;

    // 7. Find our payment using Paystack's reference
    const payment = await prisma.payment.findUnique({
      where: {
        reference: transaction.reference,
      },
    });

    if (!payment) {
      return NextResponse.json(
        { message: "Payment not found" },
        { status: 404 },
      );
    }

    // 8. Confirm the amount belongs to our payment
    if (transaction.amount !== payment.amount) {
      return NextResponse.json(
        { message: "Payment amount mismatch" },
        { status: 400 },
      );
    }

    // 9. Make processing idempotent
    if (payment.status === "SUCCESSFUL") {
      return NextResponse.json(
        { message: "Payment already processed" },
        { status: 200 },
      );
    }

    // 10. Update our database
    await prisma.payment.update({
      where: {
        id: payment.id,
      },
      data: {
        status: "SUCCESSFUL",
        paidAt: transaction.paid_at
          ? new Date(transaction.paid_at)
          : new Date(),
      },
    });

    return NextResponse.json(
      { message: "Webhook processed successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Paystack webhook error:", error);

    return NextResponse.json(
      { message: "Webhook processing failed" },
      { status: 500 },
    );
  }
}