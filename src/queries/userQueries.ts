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
export async function addUser(uid:string, name:string, email:string){
    try{
      const addUserQuery =  `
      INSERT INTO users (uid, email, name)
      VALUES ($1, $2, $3)
      ON CONFLICT (uid) DO UPDATE 
        SET email = EXCLUDED.email,
            name = EXCLUDED.name
      RETURNING *;
    `;
    const values = [uid, email, name];
    const result = await pool.query(addUserQuery, values);
    return result.rows[0];
    }
    catch(err){
        console.error("❌ Query error:", err);
        throw err;
    }
}
// queries/userQueries.ts
export async function getUserByUid(uid: string) {
  try {
    const result = await pool.query("SELECT * FROM users WHERE uid = $1;", [uid]);
    return result.rows[0];  
  } catch (err) {
    console.error("❌ Query error:", err);
    throw err;
  }
}
