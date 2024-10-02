require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4040;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
app.use(bodyParser.json());

app.get('/ping', (req, res) => res.json("pong"));

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email.length > 0 && password.length > 0) {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ success: true, token });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
