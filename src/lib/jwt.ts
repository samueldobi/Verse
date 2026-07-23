import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dev-secret-change-in-production";

export function signToken(payload: { userId: number; uid: string; email: string }) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET) as { userId: number; uid: string; email: string };
}
