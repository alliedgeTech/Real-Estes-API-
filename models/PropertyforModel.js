const mongoose = require("mongoose");

const PropertyforSchema = new mongoose.Schema({
  Property: {
    type: String,
    required: true,
  },
});

const Propertyfor = mongoose.model("Propertyfor", PropertyforSchema);

module.exports = Propertyfor;
