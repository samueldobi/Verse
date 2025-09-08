import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

async function test() {
    console.log("🔌 Connection string:", process.env.POSTGRES_URL);
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("✅ Connected! Time:", res.rows[0]);

  } catch (err) {
    console.error("❌ Connection failed:", err);
  } finally {
    await pool.end();
  }
}

test();
