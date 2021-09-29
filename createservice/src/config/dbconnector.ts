import { Pool } from 'pg';
import dotenv from 'dotenv'
dotenv.config()

const conn = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    db: process.env.DB_NAME
}

const pool = new Pool({
    max: 20,
    connectionString: `postgres://${conn.user}:${conn.password}@${conn.host}:${conn.port}/${conn.db}`,
    idleTimeoutMillis: 30000
});

export default pool;