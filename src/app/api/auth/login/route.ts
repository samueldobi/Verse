import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { users } from "@/db/schema";
import { signToken } from "@/lib/jwt";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const [user] = await db.select().from(users).where(eq(users.email, email));
    if (!user || !user.password) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = signToken({ userId: user.id, uid: user.uid, email: user.email });
    return NextResponse.json({ token, user: { id: user.id, uid: user.uid, email: user.email, name: user.name } });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Failed to login" }, { status: 500 });
  }
}
