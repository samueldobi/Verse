import { NextResponse } from "next/server";
import { db } from "@/db";
import { users, userPrefs } from "@/db/schema";
import { eq, and, ne } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";

const up1 = alias(userPrefs, "up1");
const up2 = alias(userPrefs, "up2");

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: uid } = await params;
    if (!uid) {
      return NextResponse.json({ error: "Invalid user uid" }, { status: 400 });
    }

    const [user] = await db.select().from(users).where(eq(users.uid, uid));
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const matches = await db
      .select({
        match_id: users.id,
        match_uid: users.uid,
        name: users.name,
        speaks_language: up2.speaksLanguage,
        learning_language: up2.learningLanguage,
      })
      .from(up1)
      .innerJoin(
        up2,
        and(
          eq(up1.speaksLanguage, up2.learningLanguage),
          eq(up1.learningLanguage, up2.speaksLanguage)
        )
      )
      .innerJoin(users, eq(up2.userId, users.id))
      .where(and(eq(up1.userId, user.id), ne(up2.userId, up1.userId)));

    return NextResponse.json(matches);
  } catch (err) {
    console.error("Error fetching matches:", err);
    return NextResponse.json({ error: "Failed to fetch matches" }, { status: 500 });
  }
}
