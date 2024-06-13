const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
});

const Budget = mongoose.model("Budget", BudgetSchema);

module.exports = Budget;
