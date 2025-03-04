import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });

const { Client } = pkg;

const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL
});

console.log('Connecting to database with connection string:', process.env.NEON_DATABASE_URL);

client.connect();

const createTable = async () => {
    const query = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        );
    `;
    try {
        await client.query(query);
        console.log('Table "users" created successfully');
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        await client.end();
    }
};

createTable();
