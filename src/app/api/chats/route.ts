import { NextResponse } from "next/server";
import { startChatSession, retrieveUserChats } from "@/queries/chatQueries";


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
export async function GET(req:Request){
    try{
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");
        if (!userId){
            return NextResponse.json({error: "User does not exist"}, {status:400});
        }
        const getChats = await retrieveUserChats(userId); 
        return NextResponse.json({success:true, getChats}, {status:200})
    }catch(err){
        console.log("error in retrieving chats in api/chats ", err);
        return NextResponse.json(
            { success: false, message: "Server error while retrieving chats" },
            { status: 500 }
        )
    }
}