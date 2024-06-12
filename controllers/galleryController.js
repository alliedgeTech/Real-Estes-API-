const cloudinary = require('../config/cloudinary');
const Gallery = require('../models/galleryModel');

// Upload image to Cloudinary and save URL to database
const uploadImage = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        const file = req.files.image;

        // Upload file to Cloudinary
        const result = await cloudinary.uploader.upload(file.tempFilePath);

        // Save the image URL in the database
        const newImage = new Gallery({ image: result.secure_url });
        await newImage.save();

        res.status(201).json(newImage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all images
const getAllImages = async (req, res) => {
    try {
        const images = await Gallery.find();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single image by ID
const getImageById = async (req, res) => {
    try {
        const image = await Gallery.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json(image);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update image's metadata
const updateImage = async (req, res) => {
    try {
        const updatedImage = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedImage) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json(updatedImage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete image
const deleteImage = async (req, res) => {
    try {
        const image = await Gallery.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        // Delete image from Cloudinary
        const publicId = image.image.split('/').pop().split('.')[0]; // Extract public_id from URL
        await cloudinary.uploader.destroy(publicId);

        // Delete image from database
        await Gallery.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    uploadImage,
    getAllImages,
    getImageById,
    updateImage,
    deleteImage
};
