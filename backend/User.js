const db = require('./db');

class User {
  async login(username, password) {
    const sql = 'SELECT * FROM user WHERE username = ? AND password = ?';
    const results = await db.query(sql, [username, password]);
    return results;
  }

  async signUp(userData) {
    const { username, password, email, userType, instrument, level, cv, permissions } = userData;
    const checkUserSql = 'SELECT * FROM user WHERE username = ? OR email = ?';
    const existingUsers = await db.query(checkUserSql, [username, email]);

    if (existingUsers.length > 0) {
      return { success: false, message: 'Username or email already exists' };
    }

    const insertUserSql = 'INSERT INTO user (username, password, email, user_type) VALUES (?, ?, ?, ?)';
    const result = await db.query(insertUserSql, [username, password, email, userType]);
    const userId = result.insertId;

    if (userType === 'student') {
      const insertStudentSql = 'INSERT INTO student (user_id, instrument, level) VALUES (?, ?, ?)';
      await db.query(insertStudentSql, [userId, instrument, level]);
    } else if (userType === 'teacher') {
      const insertTeacherSql = 'INSERT INTO teacher (user_id, cv, instrument) VALUES (?, ?, ?)';
      await db.query(insertTeacherSql, [userId, cv, instrument]);
    } else if (userType === 'admin') {
      const insertAdminSql = 'INSERT INTO admin (user_id, permissions) VALUES (?, ?)';
      await db.query(insertAdminSql, [userId, permissions]);
    }

    return { success: true, message: 'User registered successfully' };
  }
}

module.exports = new User();