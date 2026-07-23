import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { verifyToken } from "@/lib/jwt";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    const payload = verifyToken(authHeader.slice(7));
    const [user] = await db.select().from(users).where(eq(users.uid, payload.uid));
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ id: user.id, uid: user.uid, email: user.email, name: user.name });
  } catch (err) {
    console.error("Auth me error:", err);
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }
}
