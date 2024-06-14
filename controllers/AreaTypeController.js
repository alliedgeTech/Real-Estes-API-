const AreaType = require('../models/AreaTypeModel');

// Create a new area type
const createAreaType = async (req, res) => {
    try {
        const areaType = new AreaType(req.body);
        await areaType.save();
        res.status(201).json(areaType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all area types
const getAreaTypes = async (req, res) => {
    try {
        const areaTypes = await AreaType.find();
        res.status(200).json(areaTypes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single area type by ID
const getAreaTypeById = async (req, res) => {
    try {
        const areaType = await AreaType.findById(req.params.id);
        if (!areaType) {
            return res.status(404).json({ message: 'Area type not found' });
        }
        res.status(200).json(areaType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an area type by ID
const updateAreaType = async (req, res) => {
    try {
        const areaType = await AreaType.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!areaType) {
            return res.status(404).json({ message: 'Area type not found' });
        }
        res.status(200).json(areaType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an area type by ID
const deleteAreaType = async (req, res) => {
    try {
        const areaType = await AreaType.findByIdAndDelete(req.params.id);
        if (!areaType) {
            return res.status(404).json({ message: 'Area type not found' });
        }
        res.status(200).json({ message: 'Area type deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createAreaType,
    getAreaTypes,
    getAreaTypeById,
    updateAreaType,
    deleteAreaType
};
