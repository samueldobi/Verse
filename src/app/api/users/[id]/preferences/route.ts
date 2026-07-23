import { NextResponse } from "next/server";
import { db } from "@/db";
import { users, userPrefs } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { speaks_language, learning_language } = await request.json();
    const { id: uid } = await context.params;

    const [user] = await db.select().from(users).where(eq(users.uid, uid));
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    if (!speaks_language || !learning_language) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const [pref] = await db
      .insert(userPrefs)
      .values({
        userId: user.id,
        speaksLanguage: speaks_language,
        learningLanguage: learning_language,
      })
      .onConflictDoUpdate({
        target: userPrefs.userId,
        set: {
          speaksLanguage: speaks_language,
          learningLanguage: learning_language,
        },
      })
      .returning();

    return NextResponse.json(pref);
  } catch (err) {
    console.error("Error handling preferences:", err);
    return NextResponse.json({ error: "Failed to handle preferences" }, { status: 500 });
  }
}
