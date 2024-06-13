const CategoryType = require("../models/CategoryTypeModel");

// Create a new category type
const createCategoryType = async (req, res) => {
  try {
    const categoryType = new CategoryType(req.body);
    await categoryType.save();
    res.status(201).json(categoryType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all category types
const getCategoryTypes = async (req, res) => {
  try {
    const categoryTypes = await CategoryType.find();
    res.status(200).json(categoryTypes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single category type by ID
const getCategoryTypeById = async (req, res) => {
  try {
    const categoryType = await CategoryType.findById(req.params.id);
    if (!categoryType) {
      return res.status(404).json({ message: "Category Type not found" });
    }
    res.status(200).json(categoryType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a category type by ID
const updateCategoryType = async (req, res) => {
  try {
    const categoryType = await CategoryType.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!categoryType) {
      return res.status(404).json({ message: "Category Type not found" });
    }
    res.status(200).json(categoryType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a category type by ID
const deleteCategoryType = async (req, res) => {
  try {
    const categoryType = await CategoryType.findByIdAndDelete(req.params.id);
    if (!categoryType) {
      return res.status(404).json({ message: "Category Type not found" });
    }
    res.status(200).json({ message: "Category Type deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createCategoryType,
  getCategoryTypes,
  getCategoryTypeById,
  updateCategoryType,
  deleteCategoryType,
};
