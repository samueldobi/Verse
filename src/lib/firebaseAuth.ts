import { getAuth } from "firebase-admin/auth";
import { firebaseAdminApp } from "./firebaseAdmin";

const adminAuth = getAuth(firebaseAdminApp);

export async function verifyIdToken(token: string) {
  try {
    return await adminAuth.verifyIdToken(token);
  } catch (err) {
    console.error("❌ Invalid Firebase token", err);
    return null;
  }
}
