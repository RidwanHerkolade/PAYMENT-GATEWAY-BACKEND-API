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

    const user = await prisma.user.findUnique({
      where: {
        id: payload.userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      user,
    });
  } catch (error) {
    console.error("Get current user error:", error);

    return NextResponse.json(
      { message: "Invalid or expired token" },
      { status: 401 },
    );
  }
}