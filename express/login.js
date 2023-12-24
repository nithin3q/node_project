const express = require('express');
const app = express();
const cors = require('cors');
const port = 5001;
const mysql = require('mysql2');
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login'
});

db.connect((err) => {
  if (err) {
    console.log('database connection is failed');
  } else {
    console.log('connection successful');
  }
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const sql = 'INSERT into users(username,password) VALUES (?,?)';

  // Check if the username is already taken
  const checkUsernameQuery = 'SELECT * from users where username=?';
  db.query(checkUsernameQuery, [username], (err, result) => {
    if (err) {
      console.error('Username check error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.length > 0) {
        res.status(400).json({ message: 'Username already taken' });
      } else {
        // Username is available, proceed with registration
        db.query(sql, [username, password], (err, result) => {
          if (err) {
            console.error('Registration error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            console.log('User registered:', result);
            res.json({ message: 'Registration successful' });
          }
        });
      }
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * from users where username=? AND password=?';

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Login error', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.length > 0) {
        console.log('Login successful:', result);
        res.json({ message: 'Login successful' });
      } else {
        console.log('Login failed, invalid credentials');
        res.status(401).json({ error: 'Invalid credentials' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`server started at https://127.0.0.1:${port}`);
});
