const mongoose = require("mongoose");

const PossessionStatusSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
});

const PossessionStatus = mongoose.model(
  "PossessionStatus",
  PossessionStatusSchema
);

module.exports = PossessionStatus;
