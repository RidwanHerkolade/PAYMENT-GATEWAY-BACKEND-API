import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { verifyPaystackTransaction } from "@/lib/paystack";

type RouteContext = {
  params: Promise<{
    reference: string;
  }>;
};

export async function GET(
  request: NextRequest,
  context: RouteContext,
) {
  try {
    // 1. Get the authentication token
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 },
      );
    }

    // 2. Verify the JWT
    const payload = await verifyToken(token);

    if (typeof payload.userId !== "string") {
      return NextResponse.json(
        { message: "Invalid token" },
        { status: 401 },
      );
    }

    // 3. Get the reference from the URL
    const { reference } = await context.params;

    // 4. Find our payment
    const payment = await prisma.payment.findUnique({
      where: {
        reference,
      },
    });

    if (!payment) {
      return NextResponse.json(
        { message: "Payment not found" },
        { status: 404 },
      );
    }

    // 5. Make sure this payment belongs to the logged-in user
    if (payment.userId !== payload.userId) {
      return NextResponse.json(
        { message: "You are not allowed to access this payment" },
        { status: 403 },
      );
    }

    // 6. Ask Paystack for the transaction status
    const transaction =
      await verifyPaystackTransaction(reference);

    // 7. Verify the transaction reference
    if (transaction.reference !== payment.reference) {
      return NextResponse.json(
        { message: "Payment reference mismatch" },
        { status: 400 },
      );
    }

    // 8. Verify the amount
    if (transaction.amount !== payment.amount) {
      return NextResponse.json(
        { message: "Payment amount mismatch" },
        { status: 400 },
      );
    }

    // 9. Successful payment
    if (transaction.status === "success") {
      const updatedPayment = await prisma.payment.update({
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

      return NextResponse.json({
        message: "Payment verified successfully",
        payment: updatedPayment,
      });
    }

    // 10. Handle final failed statuses
    const failedStatuses = [
      "failed",
      "abandoned",
      "reversed",
    ];

    if (failedStatuses.includes(transaction.status)) {
      const updatedPayment = await prisma.payment.update({
        where: {
          id: payment.id,
        },
        data: {
          status: "FAILED",
          paidAt: null
        },
      });

      return NextResponse.json({
        message: "Payment failed",
        payment: updatedPayment,
      });
    }

    // 11. Payment is still being processed
    return NextResponse.json(
      {
        message: "Payment has not been completed",
        status: transaction.status,
        payment: {
          id: payment.id,
          reference: payment.reference,
          status: payment.status,
        },
      },
      { status: 400 },
    );
  } catch (error) {
    console.error("Payment verification error:", error);

    return NextResponse.json(
      { message: "Failed to verify payment" },
      { status: 500 },
    );
  }
}