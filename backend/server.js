const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const complaintRoutes = require('./routes/complaints');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/complaints', complaintRoutes);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/complaint_system';
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection failed:', err));

app.get('/', (req, res) => res.send('Complaint Management Backend Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
