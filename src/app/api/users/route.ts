import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid");
    if (!uid) {
      return NextResponse.json({ error: "Missing UID parameter" }, { status: 400 });
    }
    const [user] = await db.select().from(users).where(eq(users.uid, uid));
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (err) {
    console.error("Error fetching user by uid:", err);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}
