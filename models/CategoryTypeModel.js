const mongoose = require("mongoose");

const CategoryTypeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
});

const CategoryType = mongoose.model("CategoryType", CategoryTypeSchema);

module.exports = CategoryType;
