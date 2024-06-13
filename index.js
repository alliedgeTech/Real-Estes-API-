const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const contactRoutes = require('./routes/contactRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const PropertyforRoutes=require('./routes/PropertyforRoutes');
const cors = require('cors');
const { connectCloudinary } = require('./config/cloudinary');


// Connect to Cloudinary
connectCloudinary();

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Create an instance of express
const app = express();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to handle file uploads
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Use routes
app.use('/contacts', contactRoutes);
app.use('/gallery', galleryRoutes);
app.use('/Propertyfor',PropertyforRoutes)

// Set the server port
const PORT = process.env.PORT || 9001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
