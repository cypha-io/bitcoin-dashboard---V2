import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email } = req.body;

  const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();
    const query = `
      INSERT INTO users (name, email)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [name, email];
    const result = await client.query(query, values);
    await client.end();
    
    return res.status(201).json({
      message: "User registered successfully",
      user: result.rows[0],
    });
  } catch (err) {
    console.error("Error inserting data into the database:", err);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
}
