const Area = require('../models/AreaModel');

// Create a new area
const createArea = async (req, res) => {
    try {
        const area = new Area(req.body);
        await area.save();
        res.status(201).json(area);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all areas
const getAreas = async (req, res) => {
    try {
        const areas = await Area.find();
        res.status(200).json(areas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single area by ID
const getAreaById = async (req, res) => {
    try {
        const area = await Area.findById(req.params.id);
        if (!area) {
            return res.status(404).json({ message: 'Area not found' });
        }
        res.status(200).json(area);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an area by ID
const updateArea = async (req, res) => {
    try {
        const area = await Area.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!area) {
            return res.status(404).json({ message: 'Area not found' });
        }
        res.status(200).json(area);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an area by ID
const deleteArea = async (req, res) => {
    try {
        const area = await Area.findByIdAndDelete(req.params.id);
        if (!area) {
            return res.status(404).json({ message: 'Area not found' });
        }
        res.status(200).json({ message: 'Area deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createArea,
    getAreas,
    getAreaById,
    updateArea,
    deleteArea
};
