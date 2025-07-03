const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Example endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Gladiatus Helper API!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
