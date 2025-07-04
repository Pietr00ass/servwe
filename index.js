const express = require('express');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Load licenses from file
function loadLicenses() {
  try {
    const data = fs.readFileSync(__dirname + '/license.json', 'utf-8');
    return JSON.parse(data).licenses || {};
  } catch (e) {
    return {};
  }
}

let licenses = loadLicenses();

// Reload licenses on change
fs.watchFile(__dirname + '/license.json', () => {
  licenses = loadLicenses();
});

// Example endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Gladiatus Helper API!' });
});

// License check endpoint
app.get('/api/license/:key', (req, res) => {
  const key = req.params.key;
  const lic = licenses[key];
  if (!lic) {
    return res.status(404).json({ valid: false });
  }
  res.json({ valid: !!lic.valid, expires: lic.expires });
});

// Root endpoint to verify server is running
app.get('/', (req, res) => {
  res.send('Gladiatus Helper API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
