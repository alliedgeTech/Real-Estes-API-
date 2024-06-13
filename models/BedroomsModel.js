const mongoose = require("mongoose");

const BedroomsSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
});

const Bedrooms = mongoose.model("Bedrooms", BedroomsSchema);

module.exports = Bedrooms;
