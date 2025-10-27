import { NextResponse } from "next/server";
import { startChatSession } from "@/queries/chatQueries";


export async function POST(req:Request){
    try{
        const {user1_id, user2_id} = await req.json();
        if(!user1_id || !user2_id){
            return NextResponse.json({ error: "Missing user IDs" }, { status: 400 });
        }
        const startChat =  await startChatSession(user1_id, user2_id);
        return NextResponse.json({ success: true, chat: startChat }, { status: 200 });
    }catch(err){
        console.log("🔥 Error in /api/chats:", err);
        return NextResponse.json({ error: "Failed to start chat session" }, { status: 500 });
    }
}