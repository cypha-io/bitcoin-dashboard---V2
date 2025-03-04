const { Client } = require('pg');
require('dotenv').config();

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();
    const query = `
      SELECT * FROM users
      WHERE email = $1 AND password = $2;
    `;
    const values = [email, password];
    const result = await client.query(query, values);
    await client.end();

    if (result.rows.length > 0) {
      return res.status(200).json({ message: 'Login successful', user: result.rows[0] });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error('Error querying the database:', err);
    return res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};
