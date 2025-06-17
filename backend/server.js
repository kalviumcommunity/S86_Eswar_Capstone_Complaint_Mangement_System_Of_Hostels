const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const complaintRoutes = require('./routes/complaints');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/complaints', complaintRoutes);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/complaint_system';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected succesfully'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Complaint Management API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
