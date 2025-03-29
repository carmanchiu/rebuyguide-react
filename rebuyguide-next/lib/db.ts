// lib/db.ts
import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Define the configuration for the database pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default pool;