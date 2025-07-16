const express = require('express');
const router = express.Router();
const Complaint = require('../models/components');



router.get('/all/:type', async (req, res) => {
  try {
    const complaints = await Complaint.find({ type: req.params.type });
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch complaints' });
  }
});

router.get('/user/:userId/:type', async (req, res) => {
  try {
    const complaints = await Complaint.find({
      user: req.params.userId,
      type: req.params.type
    });
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user complaints' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updates = {};
    const { status, priority } = req.body;

    if (status) updates.status = status;
    if (priority) updates.priority = priority;

    const updated = await Complaint.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Complaint not found' });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update complaint' });
  }
});

router.get('/', (req, res) => {
  res.send('Complaint API is working');
});

module.exports = router;
