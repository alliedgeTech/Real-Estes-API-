const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const contactRoutes = require('./routes/contactRoutes');
const galleryRoutes = require('./routes/galleryRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

app.use('/contacts', contactRoutes);
app.use('/gallery', galleryRoutes);

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
