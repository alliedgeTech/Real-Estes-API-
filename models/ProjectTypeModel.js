const mongoose = require("mongoose");

const ProjectTypeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
});

const ProjectType = mongoose.model("ProjectType", ProjectTypeSchema);

module.exports = ProjectType;
