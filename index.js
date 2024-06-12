const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/contacts', contactRoutes);

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
