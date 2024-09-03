import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function jwtMiddleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { success: false, error: "Unauthorized, token missing" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, "secret");
    // req.user = decodedToken;
    return null;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Unauthorized, invalid token" },
      { status: 401 }
    );
  }
}
