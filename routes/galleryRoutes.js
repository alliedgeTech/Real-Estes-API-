const express = require('express');
const { uploadImage, getAllImages, getImageById, updateImage, deleteImage } = require('../controllers/galleryController');
const router = express.Router();

router.post('/', uploadImage);
router.get('/', getAllImages);
router.get('/:id', getImageById);
router.put('/:id', updateImage);
router.delete('/:id', deleteImage);

module.exports = router;
