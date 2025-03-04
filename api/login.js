export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  // Simulate successful login without checking the database
  return res.status(200).json({
    message: "Login successful",
    user: { email },
  });
}
