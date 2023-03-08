const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5005;
const connectDB = require('./config/db.js');

connectDB();

const app = express();

// Body paerser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the RandomIdeas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
