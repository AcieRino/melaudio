const express = require('express');
const mysql = require('mysql2'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'melaudio'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Root route for testing
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM user WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// Sign Up route
app.post('/api/signup', (req, res) => {
  const { username, password, email, userType, instrument, level, cv, permissions } = req.body;

  const checkUserSql = 'SELECT * FROM user WHERE username = ? OR email = ?';
  db.query(checkUserSql, [username, email], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else if (results.length > 0) {
      res.json({ success: false, message: 'Username or email already exists' });
    } else {
      const insertUserSql = 'INSERT INTO user (username, password, email, user_type) VALUES (?, ?, ?, ?)';
      db.query(insertUserSql, [username, password, email, userType], (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          const userId = result.insertId;
          if (userType === 'student') {
            const insertStudentSql = 'INSERT INTO student (user_id, instrument, level) VALUES (?, ?, ?)';
            db.query(insertStudentSql, [userId, instrument, level], (err, result) => {
              if (err) {
                res.status(500).send(err);
              } else {
                res.json({ success: true, message: 'User registered successfully' });
              }
            });
          } else if (userType === 'teacher') {
            const insertTeacherSql = 'INSERT INTO teacher (user_id, cv, instrument) VALUES (?, ?, ?)';
            db.query(insertTeacherSql, [userId, cv, instrument], (err, result) => {
              if (err) {
                res.status(500).send(err);
              } else {
                res.json({ success: true, message: 'User registered successfully' });
              }
            });
          } else if (userType === 'admin') {
            const insertAdminSql = 'INSERT INTO admin (user_id, permissions) VALUES (?, ?)';
            db.query(insertAdminSql, [userId, permissions], (err, result) => {
              if (err) {
                res.status(500).send(err);
              } else {
                res.json({ success: true, message: 'User registered successfully' });
              }
            });
          }
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
