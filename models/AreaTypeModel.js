const mongoose = require('mongoose');

const AreaTypeSchema = new mongoose.Schema({
    area: {
        type: Number,
        required: true
    },
});

// Check if the model is already defined to prevent OverwriteModelError
const AreaType = mongoose.models.AreaType || mongoose.model('AreaType', AreaTypeSchema);

module.exports = AreaType;
