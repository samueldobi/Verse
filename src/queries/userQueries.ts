import { pool } from "../lib/verse_db";

export async function getUsers(){
    try{
    const results = await pool.query(" SELECT * FROM users;");
    return results.rows;
    }catch(err){
        console.error("❌ Query error:", err);
        throw err;
    }

}