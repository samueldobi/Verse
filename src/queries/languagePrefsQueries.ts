import {pool} from "../lib/verse_db";

export async function addLanguagePreference(user_id:number, speaks_language:string, learning_language:string){
    try{
        const addLangPrefQuery = `
        INSERT INTO user_prefs (user_id, speaks_language, learning_language)
        VALUES ($1, $2, $3)
        ON CONFLICT (user_id) DO UPDATE
          SET speaks_language = EXCLUDED.speaks_language,
              learning_language = EXCLUDED.learning_language
        RETURNING *;
        `;
        const values = [user_id, speaks_language, learning_language];
        const result = await pool.query(addLangPrefQuery, values);
        return result.rows[0];
    }catch(err){
        console.error("❌ Query error:", err);
        throw err;
    }
} 
export async function matchLanguages(userId: number) {
  try {
    const matchLangQuery = `
      SELECT
        u2.uid AS match_uid,          -- return Firebase UID for frontend use
        u2.name AS name,
        up2.speaks_language AS speaks_language,
        up2.learning_language AS learning_language
      FROM user_prefs up1
      JOIN user_prefs up2
        ON up1.speaks_language = up2.learning_language
       AND up1.learning_language = up2.speaks_language
      JOIN users u2 ON up2.user_id = u2.id   -- 🔥 join on integer PK, not uid
      WHERE up1.user_id = $1                 -- 🔥 compare using integer id
        AND up2.user_id <> up1.user_id;
    `;
    const values = [userId];
    const result = await pool.query(matchLangQuery, values);
    return result.rows;
  } catch (err) {
    console.error("❌ Query error:", err);
    throw err;
  }
}
