const OtherFeatures = require("../models/OtherFeaturesModel");

// Create a new other feature
const createOtherFeatures = async (req, res) => {
  try {
    const otherFeatures = new OtherFeatures(req.body);
    await otherFeatures.save();
    res.status(201).json(otherFeatures);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all other features
const getOtherFeatures = async (req, res) => {
  try {
    const otherFeatures = await OtherFeatures.find();
    res.status(200).json(otherFeatures);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single other feature by ID
const getOtherFeaturesById = async (req, res) => {
  try {
    const otherFeatures = await OtherFeatures.findById(req.params.id);
    if (!otherFeatures) {
      return res.status(404).json({ message: "Other Features not found" });
    }
    res.status(200).json(otherFeatures);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an other feature by ID
const updateOtherFeatures = async (req, res) => {
  try {
    const otherFeatures = await OtherFeatures.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!otherFeatures) {
      return res.status(404).json({ message: "Other Features not found" });
    }
    res.status(200).json(otherFeatures);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an other feature by ID
const deleteOtherFeatures = async (req, res) => {
  try {
    const otherFeatures = await OtherFeatures.findByIdAndDelete(req.params.id);
    if (!otherFeatures) {
      return res.status(404).json({ message: "Other Features not found" });
    }
    res.status(200).json({ message: "Other Features deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createOtherFeatures,
  getOtherFeatures,
  getOtherFeaturesById,
  updateOtherFeatures,
  deleteOtherFeatures,
};
