const Propertyfor = require('../models/PropertyforModel');

// Create a new property
const createPropertyfor = async (req, res) => {
    try {
        const property = new Propertyfor(req.body);
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all properties
const getPropertyfor = async (req, res) => {
    try {
        const properties = await Propertyfor.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single property by ID
const getPropertyforById = async (req, res) => {
    try {
        const property = await Propertyfor.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a property by ID
const updatePropertyfor = async (req, res) => {
    try {
        const property = await Propertyfor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a property by ID
const deletePropertyfor = async (req, res) => {
    try {
        const property = await Propertyfor.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json({ message: 'Property deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createPropertyfor,
    getPropertyfor,
    getPropertyforById,
    updatePropertyfor,
    deletePropertyfor
};
