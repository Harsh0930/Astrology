require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN })); // allow your front‑end origin
app.use(express.json());

// Log incoming booking payload (dev only)
if (process.env.NODE_ENV !== 'production') {
  app.use((req, _res, next) => {
    if (req.path === '/api/bookings' && req.method === 'POST') {
      console.log('📥 Received booking payload:', req.body);
    }
    next();
  });
}

// Create a pool – adjust max connections as needed
const [dbHost, dbPort] = (process.env.DB_HOST || '').split(':');
const pool = mysql.createPool({
  host: dbHost || 'auth-db1953.hstgr.io',
  port: dbPort ? parseInt(dbPort, 10) : process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// Health-check endpoint
app.get('/api/health', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS ok');
    res.json({ status: 'ok', db: rows[0].ok === 1 ? 'connected' : 'error' });
  } catch (err) {
    console.error('DB health check failed:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.post('/api/bookings', async (req, res) => {
  const {
    token,
    sequence,
    name,
    clientType,
    phoneFull,
    phone,
    countryCode,
    city,
    state,
    concern,
    date,
    slot,
    createdAt,
    dateLabel,
    clientTypeLabel,
  } = req.body;

  // Minimal validation – Front‑end already validates required fields
  if (!token || !name || !phone || !date || !slot) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const [result] = await pool.execute(
      `INSERT INTO bookings
        (token, sequence, name, client_type, phone_full, phone, country_code, city, state, concern, date, slot, created_at)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        token,
        sequence,
        name,
        clientType,
        phoneFull,
        phone,
        countryCode,
        city,
        state,
        concern,
        date,
        slot,
        createdAt,
      ]
    );
    res.status(201).json({ insertedId: result.insertId });
  } catch (err) {
    console.error('DB error →', err);
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Token already exists' });
    }
    res.status(500).json({ error: 'Database error' });
  }
});

// Test DB connection on startup
async function testDbConnection() {
  try {
    const conn = await pool.getConnection();
    console.log('✓ Database connected successfully');
    conn.release();
  } catch (err) {
    console.error('✗ Database connection failed:', err.message);
    console.error('  Host:', dbHost, 'Port:', dbPort || 3306);
  }
}
testDbConnection();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
