const mongoose = require("mongoose");

const AreaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Area = mongoose.model("Area", AreaSchema);

module.exports = Area;
