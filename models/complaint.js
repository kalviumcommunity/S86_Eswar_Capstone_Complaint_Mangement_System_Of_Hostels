const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  roomNumber: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['hostel', 'college'], required: true },
  status: { type: String, default: 'Pending' },
  priority: { type: String, default: 'Medium' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', complaintSchema);
