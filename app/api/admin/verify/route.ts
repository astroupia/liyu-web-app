import { NextResponse } from "next/server";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "There is no token" },
        { status: 400 },
      );
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return NextResponse.json(
        { success: false, message: "secret key missing" },
        { status: 500 },
      );
    }
    const decode = jwt.verify(token, secret);

    if (decode) {
      return NextResponse.json(
        { success: true, message: "user succesfully verified" },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { sucess: false, message: "Verification Faild" },
      { status: 400 },
    );
  } catch (error: unknown) {
    if (error instanceof JsonWebTokenError) {
      return NextResponse.json(
        { success: false, message: "Token expired" },
        { status: 401 },
      );
    }
    console.error("ERROR DURING VERIFICATION", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
