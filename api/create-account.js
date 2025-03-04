import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email } = req.body;

  // Simulate successful account creation without checking the database
  return res.status(201).json({
    message: "User registered successfully",
    user: { name, email },
  });
}
