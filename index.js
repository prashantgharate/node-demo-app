const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome from Prashant R Gharate Created Nodejs App!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

