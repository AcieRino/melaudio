const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./User');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/teachers_app/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

app.post('/api/signup', upload.fields([{ name: 'cv' }, { name: 'application' }]), async (req, res) => {
  try {
    const { username, password, email, userType, instrument, level } = req.body;
    const cv = req.files.cv ? req.files.cv[0].path : null;
    const application = req.files.application ? req.files.application[0].path : null;

    const userData = {
      username,
      password,
      email,
      userType,
      instrument,
      level,
      cv,
      application,
      permissions: userType === 'admin' ? 'all' : null
    };

    const result = await User.signUp(userData);
    res.json(result);
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ success: false, message: 'An error occurred during sign-up', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
