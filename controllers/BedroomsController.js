const Bedrooms = require('../models/BedroomsModel');

// Create a new bedrooms
const createBedrooms = async (req, res) => {
    try {
        const bedrooms = new Bedrooms(req.body);
        await bedrooms.save();
        res.status(201).json(bedrooms);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all bedrooms
const getBedrooms = async (req, res) => {
    try {
        const bedrooms = await Bedrooms.find();
        res.status(200).json(bedrooms);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single bedrooms by ID
const getBedroomsById = async (req, res) => {
    try {
        const bedrooms = await Bedrooms.findById(req.params.id);
        if (!bedrooms) {
            return res.status(404).json({ message: 'Bedrooms not found' });
        }
        res.status(200).json(bedrooms);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update bedrooms by ID
const updateBedrooms = async (req, res) => {
    try {
        const bedrooms = await Bedrooms.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!bedrooms) {
            return res.status(404).json({ message: 'Bedrooms not found' });
        }
        res.status(200).json(bedrooms);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete bedrooms by ID
const deleteBedrooms = async (req, res) => {
    try {
        const bedrooms = await Bedrooms.findByIdAndDelete(req.params.id);
        if (!bedrooms) {
            return res.status(404).json({ message: 'Bedrooms not found' });
        }
        res.status(200).json({ message: 'Bedrooms deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createBedrooms,
    getBedrooms,
    getBedroomsById,
    updateBedrooms,
    deleteBedrooms
};
