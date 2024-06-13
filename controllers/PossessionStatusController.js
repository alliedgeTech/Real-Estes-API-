const PossessionStatus = require("../models/PossessionStatusModel");

// Create a new possession status
const createPossessionStatus = async (req, res) => {
  try {
    const possessionStatus = new PossessionStatus(req.body);
    await possessionStatus.save();
    res.status(201).json(possessionStatus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all possession statuses
const getPossessionStatuses = async (req, res) => {
  try {
    const possessionStatuses = await PossessionStatus.find();
    res.status(200).json(possessionStatuses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single possession status by ID
const getPossessionStatusById = async (req, res) => {
  try {
    const possessionStatus = await PossessionStatus.findById(req.params.id);
    if (!possessionStatus) {
      return res.status(404).json({ message: "Possession Status not found" });
    }
    res.status(200).json(possessionStatus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a possession status by ID
const updatePossessionStatus = async (req, res) => {
  try {
    const possessionStatus = await PossessionStatus.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!possessionStatus) {
      return res.status(404).json({ message: "Possession Status not found" });
    }
    res.status(200).json(possessionStatus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a possession status by ID
const deletePossessionStatus = async (req, res) => {
  try {
    const possessionStatus = await PossessionStatus.findByIdAndDelete(
      req.params.id
    );
    if (!possessionStatus) {
      return res.status(404).json({ message: "Possession Status not found" });
    }
    res.status(200).json({ message: "Possession Status deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createPossessionStatus,
  getPossessionStatuses,
  getPossessionStatusById,
  updatePossessionStatus,
  deletePossessionStatus,
};
