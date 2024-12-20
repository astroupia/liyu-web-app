import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const ADMIN_USERNAME = "liyu";
const ADMIN_PASSWORD = "liyu-catering-21";
const JWT_SECRET =
  process.env.JWT_SECRET ||
  "1d30c91cb489138aa93bbb95b553c25d239fa01c90e823196b26acc008af136471e1506695f59eaad4e78c4fb7427a896c4e970fea263738e4db8de714f4389e";

// Define a User type
interface User {
  id: string;
  username: string; // Add other properties as needed
}

const generateToken = (user: User) => {
  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
};

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (username !== ADMIN_USERNAME) {
      return NextResponse.json({ error: "Invalid Username" }, { status: 401 });
    }

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 401 });
    }

    const user: User = { id: username, username: username }; // Create a user object with required properties
    const token = generateToken(user);

    cookies().set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}
