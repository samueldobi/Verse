import { NextResponse } from "next/server";
import {  getUserByUid } from "@/queries/userQueries";

interface Props {
  params: { id: string };
}
export async function GET(
 req: Request, 
 { params }: Props
) {
  try {
    const {id} =  await params;
    const userId =  id; 
    const user = await getUserByUid(userId); 

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (err) {
    console.error("❌ Error fetching user:", err);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
