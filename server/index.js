// Dependencies
const express = require('express');
const mysql = require('mysql2'); // Using mysql2 for better support and async queries
const cors = require('cors');

// Initialize Express App
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for cross-origin requests

// Connect to MySQL Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Enter your MySQL password here if you have one
    database: 'plantdb',
});

// Test Database Connection
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Database connected successfully');
});

app.post('/register', (req, res) => {
    const { Email, UserName, Password, Phone, State, Segment, Investment, Language } = req.body;
    const SQL = 'INSERT INTO users (email, username, password, phone, state, segment, investment, lang) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(SQL, [Email, UserName, Password, Phone, State, Segment, Investment, Language], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send(err);
            return;
        }
        console.log('User registered successfully');
        res.send({ message: 'User added!' });
    });
});


// Route to Login a User
app.post('/login', (req, res) => {
    const { LoginUserName, LoginPassword } = req.body;
    const SQL = 'SELECT * FROM users WHERE username = ? AND password = ?';
    
    db.query(SQL, [LoginUserName, LoginPassword], (err, results) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).send({ error: err });
            return;
        }
        if (results.length > 0) {
            res.send(results);
        } else {
            res.send({ message: "Credentials don't match!" });
        }
    });
});

// Route to Get All Users
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

// Start the Server
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});
