import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Admin, { IAdmin } from "@/lib/models/admin";

export async function POST(req: Request) {
  try {
    const { userName, password } = await req.json();

    if (
      !userName ||
      !password ||
      typeof userName !== "string" ||
      typeof password !== "string"
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid or missing inputs" },
        { status: 400 },
      );
    }

    await connectDB();

    const admin: IAdmin | null = await Admin.findOne({ userName });

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Admin not found" },
        { status: 404 },
      );
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error in admin login:", error.message);
    } else {
      console.error("unknown error has happened", error);
    }

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
