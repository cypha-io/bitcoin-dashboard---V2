import { Client } from 'pg';

const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL,
});

client.connect();

export const saveUser = async (user) => {
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2)';
    const values = [user.name, user.email];
    await client.query(query, values);
};

export const getUsers = async () => {
    const res = await client.query('SELECT * FROM users');
    return res.rows;
};
