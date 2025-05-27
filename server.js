const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json())

// Default route
app.get('/get', (req, res) => {
  res.send('Welcome to the Complaint Management System API');
});

// Start Server

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
