import { NextResponse } from "next/server";
import { sendMessages, getUserMessagesById } from "@/queries/chatQueries";

export async function POST(req:Request){
    try{
        const {chatId, senderId, content} = await req.json(); 
        const sendChat = await sendMessages(chatId, senderId, content);
        return NextResponse.json({succes:true, sendChat}, {status:200})
    }catch(err){
        console.log("Error sending messages", err);
        return NextResponse.json({success:false, message: "Error while sending chats"}, { status: 500 })
    }
}
export async function GET(
    req: Request,
    { params }: { params: { chatId: string } }){
    try{
        const chatId = parseInt(params.chatId, 10);
        if (isNaN(chatId)) {
        return NextResponse.json(
            { error: "Invalid chat ID" },
            { status: 400 }
        );
        }
        const messages = await getUserMessagesById(chatId);
        return NextResponse.json({ messages });
    }catch(err){
        console.log("Error retrieving messages", err)
    }
}