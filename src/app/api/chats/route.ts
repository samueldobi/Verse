import { NextResponse } from "next/server";
import { db } from "@/db";
import { chats, chatParticipants } from "@/db/schema";
import { sql } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { user1_id, user2_id } = await req.json();
    if (!user1_id || !user2_id) {
      return NextResponse.json({ error: "Missing user IDs" }, { status: 400 });
    }

    const [chat] = await db.insert(chats).values({}).returning();

    await db.insert(chatParticipants).values([
      { chatId: chat.id, userId: user1_id },
      { chatId: chat.id, userId: user2_id },
    ]);

    return NextResponse.json({ success: true, chat: chat.id }, { status: 200 });
  } catch (err) {
    console.error("Error in /api/chats:", err);
    return NextResponse.json({ error: "Failed to start chat session" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const userChats = await db.execute(sql`
      SELECT
        c.id AS chat_id,
        c.created_at,
        u.id AS participant_id,
        u.name AS participant_name,
        u.email AS participant_email,
        u.profile_image AS user_image,
        up.speaks_language,
        up.learning_language
      FROM chats c
      JOIN chat_participants cp ON cp.chat_id = c.id
      JOIN users u ON u.id = cp.user_id
      JOIN user_prefs up ON up.user_id = u.id
      WHERE c.id IN (
        SELECT chat_id FROM chat_participants WHERE user_id = ${userId}
      )
      AND u.id != ${userId}
    `);

    return NextResponse.json({ success: true, getChats: userChats.rows }, { status: 200 });
  } catch (err) {
    console.error("Error retrieving chats:", err);
    return NextResponse.json(
      { success: false, message: "Server error while retrieving chats" },
      { status: 500 }
    );
  }
}
