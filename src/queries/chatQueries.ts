import {pool } from "../lib/verse_db";
export async function startChatSession( user1_id:string, user2_id:string){
    try{
        const startChatQuery= `
        WITH new_chat AS (
        INSERT INTO chats DEFAULT VALUES 
        RETURNING id
        )
        INSERT INTO chat_participants (chat_id, user_id )
        SELECT new_chat.id, users.id AS user_id
        FROM new_chat,
        LATERAL (VALUES ($1::int), ($2::int)) AS users(id)
        RETURNING chat_id;
        `;
        const values = [user1_id, user2_id]
        const {rows} = await pool.query(startChatQuery, values);
        return rows[0].chat_id;
    }catch(err){
        console.error("❌ Query error:", err);
        throw err;
    }

}