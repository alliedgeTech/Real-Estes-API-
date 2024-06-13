const Gallery = require('../models/galleryModel');
const { uploadImage } = require('../config/cloudinary');
require("dotenv").config();

// Create a new gallery item
exports.createGalleryItem = async (req, res) => {
    try {
        // Check if the image file is present
        if (!req.files || !req.files.image) {
            return res.status(400).json({ message: 'No image file uploaded' });
        }

        const uploadedFile = await uploadImage(req.files.image, process.env.FOLDER_IMAGES);

        // Check if the buildingName field is present
        if (!req.body.buildingName) {
            return res.status(400).json({ message: 'Building name is required' });
        }

        // Create the gallery item entry
        const galleryItem = new Gallery({
            image: uploadedFile.secure_url,
            buildingName: req.body.buildingName
        });

        await galleryItem.save();

        res.status(201).json(galleryItem);
    } catch (err) {
        res.status(400).json({ message: 'Error creating gallery item: ' + err.message });
    }
};

// Get all gallery items
exports.getGalleryItems = async (req, res) => {
    try {
        const galleryItems = await Gallery.find();
        res.status(200).json(galleryItems);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching gallery items: ' + err.message });
    }
};

// Get a single gallery item by its ID
exports.getGalleryItemById = async (req, res) => {
    try {
        const galleryItem = await Gallery.findById(req.params.id);
        if (!galleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }
        res.status(200).json(galleryItem);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching gallery item: ' + err.message });
    }
};

// Update a gallery item by its ID
exports.updateGalleryItem = async (req, res) => {
    try {
        let updateData = {};

        // Check if an image file is present and upload it to Cloudinary
        if (req.files && req.files.image) {
            const uploadedImage = await uploadImage(req.files.image, process.env.FOLDER_IMAGES);
            updateData.image = uploadedImage.secure_url;
        }

        // Check if the buildingName field is present
        if (req.body.buildingName) {
            updateData.buildingName = req.body.buildingName;
        } else {
            return res.status(400).json({ message: 'Building name is required' });
        }

        const galleryItem = await Gallery.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!galleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }

        res.status(200).json(galleryItem);
    } catch (err) {
        res.status(400).json({ message: 'Error updating gallery item: ' + err.message });
    }
};

// Delete a gallery item by its ID
exports.deleteGalleryItem = async (req, res) => {
    try {
        const galleryItem = await Gallery.findByIdAndDelete(req.params.id);
        if (!galleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }
        res.status(200).json({ message: 'Gallery item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting gallery item: ' + err.message });
    }
};
