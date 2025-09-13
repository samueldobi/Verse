import { NextResponse } from "next/server";
import {addLanguagePreference} from "@/queries/languagePrefsQueries";
import {pool} from "@/lib/verse_db";

export async function POST(
    request: Request, 
    context: { params: { id: string } }
)
 {
    try{
        const { speaks_language, learning_language} = await request.json();
        const { id:firebaseUid } = await context.params; 
        // const user_id = id;
        const userResult = await pool.query(
            "SELECT id FROM users WHERE uid = $1",
            [firebaseUid]
            );

            if (userResult.rows.length === 0) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
            }
        const user_id = userResult.rows[0].id;

        if(!user_id || !speaks_language || !learning_language){
            return NextResponse.json({error: "Missing fields"}, {status: 400});
        }
        const newPref = await addLanguagePreference(user_id, speaks_language, learning_language);
        return NextResponse.json(newPref);
    }catch(err){
        console.error("❌ Error handling preferences:", err);
        const error = err as Error;
        return NextResponse.json(
            { error: "Failed to handle preferences", details: error.message },
            { status: 500 }
        );
    }
}