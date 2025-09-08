import { NextResponse } from "next/server";
import { getUsers } from "@/queries/userQueries";
import { pool } from "@/lib/verse_db";
import admin from "@/lib/firebaseAdmin";


export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json(users);
  } catch (err) {
    // Cast to Error for type-safety
    const error = err as Error;

    console.error("❌ Error fetching users:");
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);

    // If Postgres gives details, they’ll be here
    if ((err as any).code) console.error("Code:", (err as any).code);
    if ((err as any).detail) console.error("Detail:", (err as any).detail);
    if ((err as any).hint) console.error("Hint:", (err as any).hint);

    return NextResponse.json(
      { error: "Database query failed", details: error.message },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const { uid } = await request.json();

    if (!uid) {
      return NextResponse.json({ error: "Missing UID" }, { status: 400 });
    }

    // 1. Fetch user details from Firebase
    const fireBaseUser = await admin.auth().getUser(uid);

    const email = fireBaseUser.email ?? null;
    const displayName = fireBaseUser.displayName ?? null;

    // 2. Insert into Postgres
    const query = `
      INSERT INTO users (uid, email, name)
      VALUES ($1, $2, $3)
      ON CONFLICT (uid) DO UPDATE 
        SET email = EXCLUDED.email,
            name = EXCLUDED.name
      RETURNING *;
    `;

    const values = [uid, email, displayName];
    const result = await pool.query(query, values);

    // 3. Return the new/updated user
    return NextResponse.json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error adding user:", err);
    const error = err as Error;
    return NextResponse.json(
      { error: "Failed to add user", details: error.message },
      { status: 500 }
    );
  }
}
