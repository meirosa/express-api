// Import Express
const express = require('express');
const app = express();
const port = 3000;

// EndPoint: Home
app.get('/', (req, res) => {
  res.send('Selamat datang di API 3122500036_Mei Rosa Widyawati_Level 2!');
});

// EndPoint: Data
app.get('/api/data', (req, res) => {
  res.json({ message: 'Ini adalah contoh data dari API' });
});

// Menjalankan server di port 3000
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});