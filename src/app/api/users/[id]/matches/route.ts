import { NextResponse } from "next/server";
import {matchLanguages} from "@/queries/languagePrefsQueries";

export async function GET(
  req:Request,
{ params }: { params: Promise <{ id: string }> }
){
    const{ id }= await params;
    const userUid = id;
      if (!userUid) {
        return NextResponse.json(
          { error: "Invalid user uid" },
          { status: 400 }
        );
      }

  try {
    const matches = await matchLanguages(userUid);
    return NextResponse.json(matches);
  } catch (err) {
    console.error("Error fetching matches:", err);
    return NextResponse.json({ error: "Failed to fetch matches" }, { status: 500 });
  }
}
