const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config.js/database');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API IS RUNNING' });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
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