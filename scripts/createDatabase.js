import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });

const { Client } = pkg;

const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL.replace('/Bitcoin', '/postgres')
});

console.log('Connecting to database with connection string:', process.env.NEON_DATABASE_URL.replace('/Bitcoin', '/postgres'));

client.connect();

const createDatabase = async () => {
    const query = `
        CREATE DATABASE "Bitcoin";
    `;
    try {
        await client.query(query);
        console.log('Database "Bitcoin" created successfully');
    } catch (error) {
        console.error('Error creating database:', error);
    } finally {
        await client.end();
    }
};

createDatabase();
