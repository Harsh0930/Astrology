require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN })); // allow your front‑end origin
app.use(express.json());

// Create a pool – adjust max connections as needed
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
