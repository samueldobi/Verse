import { NextRequest, NextResponse } from "next/server";
import { sendMessages, getUserMessagesById } from "@/queries/chatQueries";


export async function POST(req: NextRequest) {
  try {
    const { chatId, senderId, content } = await req.json();
    const sendChat = await sendMessages(chatId, senderId, content);
    return NextResponse.json(
      { success: true, sendChat },
      { status: 200 }
    );
  } catch (err) {
    console.log("Error sending messages", err);
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
    
    const messages = await getUserMessagesById(chatId);
    return NextResponse.json({ messages });
  } catch (err) {
    console.error("Error retrieving messages", err);
    return NextResponse.json(
      { success: false, message: "Error retrieving messages" },
      { status: 500 }
    );
  }
}