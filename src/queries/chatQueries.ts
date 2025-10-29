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
export async function retrieveUserChats(user_id:string){
    try{
        const retrieveChatsQuery = `
        SELECT 
        c.id AS chat_id,
        c.created_at,
        u.id AS participant_id,
        u.name AS participant_name,
        u.email AS participant_email,
        up.speaks_language,
        up.learning_language
        FROM chats c
        JOIN chat_participants cp 
        ON cp.chat_id = c.id
        JOIN users u 
        ON u.id = cp.user_id
        JOIN user_prefs up
        ON up.user_id = u.id
        WHERE c.id IN (
        SELECT chat_id 
        FROM chat_participants 
        WHERE user_id = $1
      )
      AND u.id != $1; -- exclude the current user
        `;
        const values = [user_id];
        const {rows} = await pool.query( retrieveChatsQuery, values)
        return rows;
    }catch(err){
        console.error("error returning chats", err);
        throw err;
    }
}