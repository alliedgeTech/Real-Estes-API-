const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Check connection to Cloudinary
cloudinary.api.ping((error, result) => {
    if (error) {
        console.error('Failed to connect to Cloudinary:', error);
    } else {
        console.log('Successfully connected to Cloudinary:', result);
    }
});

module.exports = cloudinary;
