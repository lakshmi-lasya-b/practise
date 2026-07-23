const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config.js/database');

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://practise-lbm9.vercel.app/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API IS RUNNING' });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.post('/api/post', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    return res.status(201).json({
        message: 'Signup data received successfully',
        data: { name, email }
    });
});

connectDB().catch((error) => {
    console.error('Database connection error:', error);
});

if (require.main === module) {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = app;