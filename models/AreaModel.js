const mongoose = require('mongoose');

const AreaSchema = new mongoose.Schema({
    area: {
        type: Number,
        required: true
    },
});

const Area = mongoose.model('Area', AreaSchema);

module.exports = Area;
