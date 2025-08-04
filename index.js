const express = require('express');
const app = express();

// Respond with message when a GET request is made to the root "/"
app.get('/', (req, res) => {
  res.send('Welcome from Prashant Gharate Created Nodejs App');
});

// Start server on port 3000 or custom port via environment variable
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on http://0.0.0.0:${PORT}`);
});

module.exports = app;

