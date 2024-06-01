const express = require('express');
const User = require('./User');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const results = await User.login(username, password);
    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const response = await User.signUp(req.body);
    res.json(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;