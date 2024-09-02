import { connectDb } from "@/dbconfig/DbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  await connectDb();
  try {
    const body = await request.json();
    const existingUser = await User.findOne({ email: body.email });

    // Check if the user already exists
    if (existingUser) {
      return NextResponse.json({
        message: "User Already Exists",
        success: false,
        status: 400,
      });
    }

    // Hash the user's password before saving
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Create a new user with the hashed password
    const newUser = {
      ...body,
      password: hashedPassword,
    };

    const savedUser = await User.create(newUser);

    return NextResponse.json({
      message: "Registered Saved Successfully",
      data: savedUser,
      status: 200,
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Hello, World!" });
}
