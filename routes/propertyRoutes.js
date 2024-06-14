// routes/propertyRoutes.js

const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

// Route to create a new property
router.post('/', propertyController.createProperty);

// Route to get all properties
router.get('/', propertyController.getProperties);

// Route to get a single property by its ID
router.get('/:id', propertyController.getPropertyById);

// Route to update a property by its ID
router.put('/:id', propertyController.updateProperty);

// Route to delete a property by its ID
router.delete('/:id', propertyController.deleteProperty);

module.exports = router;
