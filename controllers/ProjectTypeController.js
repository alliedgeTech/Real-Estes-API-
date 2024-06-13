const ProjectType = require("../models/ProjectTypeModel");

// Create a new project type
const createProjectType = async (req, res) => {
  try {
    const projectType = new ProjectType(req.body);
    await projectType.save();
    res.status(201).json(projectType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all project types
const getProjectTypes = async (req, res) => {
  try {
    const projectTypes = await ProjectType.find();
    res.status(200).json(projectTypes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single project type by ID
const getProjectTypeById = async (req, res) => {
  try {
    const projectType = await ProjectType.findById(req.params.id);
    if (!projectType) {
      return res.status(404).json({ message: "Project Type not found" });
    }
    res.status(200).json(projectType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a project type by ID
const updateProjectType = async (req, res) => {
  try {
    const projectType = await ProjectType.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!projectType) {
      return res.status(404).json({ message: "Project Type not found" });
    }
    res.status(200).json(projectType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a project type by ID
const deleteProjectType = async (req, res) => {
  try {
    const projectType = await ProjectType.findByIdAndDelete(req.params.id);
    if (!projectType) {
      return res.status(404).json({ message: "Project Type not found" });
    }
    res.status(200).json({ message: "Project Type deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createProjectType,
  getProjectTypes,
  getProjectTypeById,
  updateProjectType,
  deleteProjectType,
};
