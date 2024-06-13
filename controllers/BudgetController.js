const Budget = require("../models/BudgetModel");

// Create a new budget
const createBudget = async (req, res) => {
  try {
    const budget = new Budget(req.body);
    await budget.save();
    res.status(201).json(budget);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all budgets
const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.status(200).json(budgets);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single budget by ID
const getBudgetById = async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }
    res.status(200).json(budget);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a budget by ID
const updateBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }
    res.status(200).json(budget);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a budget by ID
const deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndDelete(req.params.id);
    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }
    res.status(200).json({ message: "Budget deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createBudget,
  getBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget,
};
