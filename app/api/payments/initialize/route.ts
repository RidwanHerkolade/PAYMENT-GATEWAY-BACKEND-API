import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { initializePaystackTransaction } from "@/lib/paystack";

const PAYMENT_AMOUNT = 500000; // ₦5,000 in kobo

export async function POST(request: NextRequest) {
  try {
    // 1. Get authentication token
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 },
      );
    }

    // 2. Verify token
    const payload = await verifyToken(token);

    if (typeof payload.userId !== "string") {
      return NextResponse.json(
        { message: "Invalid token" },
        { status: 401 },
      );
    }

    // 3. Get the current user
    const user = await prisma.user.findUnique({
      where: {
        id: payload.userId,
      },
      select: {
        id: true,
        email: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 },
      );
    }

    // 4. Generate our own payment reference
    const reference = `PAY-${crypto.randomUUID()}`;

    // 5. Create a pending payment in our database
    const payment = await prisma.payment.create({
      data: {
        userId: user.id,
        reference,
        amount: PAYMENT_AMOUNT,
        currency: "NGN",
        status: "PENDING",
      },
    });

    try {
      // 6. Initialize the payment with Paystack
      const paystackTransaction =
        await initializePaystackTransaction({
          email: user.email,
          amount: PAYMENT_AMOUNT,
          reference,
        });

      // 7. Return checkout information
      return NextResponse.json(
        {
          message: "Payment initialized successfully",
          paymentId: payment.id,
          reference: paystackTransaction.reference,
          authorizationUrl:
            paystackTransaction.authorization_url,
        },
        { status: 201 },
      );
    } catch (paystackError) {
      // 8. Paystack failed, so mark our payment as failed
      await prisma.payment.update({
        where: {
          id: payment.id,
        },
        data: {
          status: "FAILED",
        },
      });

      throw paystackError;
    }
  } catch (error) {
    console.error("Payment initialization error:", error);

    return NextResponse.json(
      { message: "Failed to initialize payment" },
      { status: 500 },
    );
  }
}