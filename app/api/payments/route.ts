import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 },
      );
    }

    const payload = await verifyToken(token);

    if (typeof payload.userId !== "string") {
      return NextResponse.json(
        { message: "Invalid token" },
        { status: 401 },
      );
    }

    const payments = await prisma.payment.findMany({
      where: {
        userId: payload.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        reference: true,
        amount: true,
        currency: true,
        status: true,
        paidAt: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      payments,
    });
  } catch (error) {
    console.error("Get payments error:", error);

    return NextResponse.json(
      { message: "Failed to fetch payments" },
      { status: 500 },
    );
  }
}