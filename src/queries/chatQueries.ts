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
        u.profile_image AS user_image,
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
// Fetch chat messages  between two users
export async function getUserMessagesById(chatId:number){
    try{
        const retrieveMessagesQuery = `
        SELECT m.id, 
        m.sender_id, 
        m.content, 
        m.created_at, 
        u.name AS sender_name
        FROM messages m
        JOIN users u ON u.id = m.sender_id 
        WHERE m.chat_id = $1
        ORDER BY m.created_at ASC;
        `
        const values = [chatId];
        const results = await pool.query(retrieveMessagesQuery, values);
        return results.rows;
    }catch(err){
        console.log("Error Retrieving chats by ID", err)
    }
}
// Send messages between two users
export async function sendMessages(chatId:number, senderId: number, content:string){
    try{
        const sendChatsQuery=`
        INSERT INTO messages(chat_id, sender_id, content, created_at)
        VALUES($1, $2, $3, NOW())
        RETURNING  *
        `;
        const values = [ chatId, senderId, content];
        const results = await pool.query(sendChatsQuery, values );
        return results.rows[0];
    }catch(err){
        console.log("Error sending messages between two users", err)
    }
}