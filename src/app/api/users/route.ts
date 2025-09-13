import { NextResponse } from "next/server";
import { getUserByUid, addUser } from "@/queries/userQueries";
// import { pool } from "@/lib/verse_db";
import admin from "@/lib/firebaseAdmin";


export async function GET(
  req: Request,
  { params }: { params: { uid: string } }
) {
  try {
    const user = await getUserByUid(params.uid);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (err) {
    console.error("❌ Error fetching user by uid:", err);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
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
    const email = fireBaseUser.email as string;
    const displayName = fireBaseUser.displayName as string;
    const newUser = await addUser(uid, email, displayName)
    return NextResponse.json(newUser);
  } catch (err) {
    console.error("❌ Error adding user:", err);
    const error = err as Error;
    return NextResponse.json(
      { error: "Failed to add user", details: error.message },
      { status: 500 }
    );
  }
}
