const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user: { type: String, required: true }, // Or ObjectId if using User model
  roomNumber: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['hostel', 'college'], required: true },
  status: { type: String, default: 'Pending' }, // Pending, In Progress, Done
  priority: { type: String, default: 'Medium' }, // Low, Medium, High
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', complaintSchema);
