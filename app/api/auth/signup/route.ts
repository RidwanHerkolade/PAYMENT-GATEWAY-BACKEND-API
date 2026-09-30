import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signupSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {

    // read the incoming json
    const body = await request.json();
    const result = signupSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          message: "validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }
    const { name, email, password } = result.data;
    const normalizedEmail = email.toLowerCase().trim();
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "An account with this email already exist" },
        { status: 409 },
      );
    }
    // hash the passworrd

    const hashedPassword = await bcrypt.hash(password, 12);

    // create user
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });
    // 7. Send a safe response
    return NextResponse.json(
      {
        message: "Account created successfully",
        user,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
