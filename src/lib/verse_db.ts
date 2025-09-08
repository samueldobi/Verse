import "dotenv/config";
import { Pool } from "pg";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  // ssl: { rejectUnauthorized: false },
});
