const express = require('express');
const router = express.Router();

let comments = [];

// Get all comments
router.get('/', (req, res) => {
  res.json(comments);
});

// Post a new comment
router.post('/', (req, res) => {
  const { name, message } = req.body;
  if (name && message) {
    comments.push({ name, message });
    res.status(201).json({ message: 'Comment added successfully' });
  } else {
    res.status(400).json({ message: 'Name and message are required' });
  }
});

module.exports = router; 