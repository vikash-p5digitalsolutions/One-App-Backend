const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact/submit
router.post('/submit', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // 🔍 Check if same email+message combo already exists
    const existing = await Contact.findOne({ email, message });
    if (existing) {
      return res.status(409).json({ success: false, message: 'This message was already submitted.' });
    }

    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.', error });
  }
});

// GET /api/contact/all
router.get('/all', async (req, res) => {
  try {
    const allContacts = await Contact.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json({ success: true, data: allContacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Could not fetch contacts.', error });
  }
});

module.exports = router;
