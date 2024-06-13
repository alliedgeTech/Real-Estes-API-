const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

// Route to create a new gallery item
router.post('/', galleryController.createGalleryItem);

// Route to get all gallery items
router.get('/', galleryController.getGalleryItems);

// Route to get a single gallery item by its ID
router.get('/:id', galleryController.getGalleryItemById);

// Route to update a gallery item by its ID
router.put('/:id', galleryController.updateGalleryItem);

// Route to delete a gallery item by its ID
router.delete('/:id', galleryController.deleteGalleryItem);

module.exports = router;
