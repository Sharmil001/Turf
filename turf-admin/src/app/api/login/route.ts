import { connectDb } from "@/dbconfig/DbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  await connectDb();

  try {
    const { email, password }: any = await req.json();

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("Auth failed, Invalid UserName/Password.");
    }

    const isPassEqual = await bcrypt.compare(password, user.password);

    if (!isPassEqual) {
      throw new Error("Auth failed, Invalid UserName/Password.");
    }

    const tokenObject = {
      _id: user._id,
      fullName: user.fullname,
      email: user.email,
    };

    const jwtToken = jwt.sign(tokenObject, "secret", { expiresIn: "4h" });

    return NextResponse.json(
      {
        success: true,
        message: "Logged In Successfully",
        data: { tokenObject, jwtToken },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message:
          (error.message.includes("Auth failed") && "Invalid Email/Password") ||
          "Internal Server Error",
      },
      { status: error.message.includes("Auth failed") ? 401 : 500 }
    );
  }
}
