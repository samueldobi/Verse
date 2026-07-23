import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { users } from "@/db/schema";
import { signToken } from "@/lib/jwt";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
    }

    const existing = await db.select().from(users).where(eq(users.email, email));
    if (existing.length > 0) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const [user] = await db
      .insert(users)
      .values({ uid: crypto.randomUUID(), email, name, password: hashedPassword })
      .returning();

    const token = signToken({ userId: user.id, uid: user.uid, email: user.email });
    return NextResponse.json({ token, user: { id: user.id, uid: user.uid, email: user.email, name: user.name } });
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json({ error: "Failed to register" }, { status: 500 });
  }
}
