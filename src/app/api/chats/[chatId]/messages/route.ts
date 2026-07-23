import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { messages } from "@/db/schema";
import { sql } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const { chatId, senderId, content } = await req.json();
    const [msg] = await db
      .insert(messages)
      .values({ chatId, senderId, content })
      .returning();
    return NextResponse.json({ success: true, message: msg }, { status: 200 });
  } catch (err) {
    console.error("Error sending messages", err);
    return NextResponse.json(
      { success: false, message: "Error while sending chats" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ chatId: string }> }
) {
  try {
    const params = await context.params;
    const chatId = parseInt(params.chatId, 10);
    if (isNaN(chatId)) {
      return NextResponse.json({ error: "Invalid chat ID" }, { status: 400 });
    }

    const result = await db.execute(sql`
      SELECT m.id, m.sender_id, m.content, m.created_at, u.name AS sender_name
      FROM messages m
      JOIN users u ON u.id = m.sender_id
      WHERE m.chat_id = ${chatId}
      ORDER BY m.created_at ASC
    `);

    return NextResponse.json({ messages: result.rows });
  } catch (err) {
    console.error("Error retrieving messages", err);
    return NextResponse.json(
      { success: false, message: "Error retrieving messages" },
      { status: 500 }
    );
  }
}
