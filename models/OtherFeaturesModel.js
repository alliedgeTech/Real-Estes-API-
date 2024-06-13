const mongoose = require('mongoose');

const OtherFeaturesSchema = new mongoose.Schema({
    feature: {
        type: String,
        required: true
    },
});

const OtherFeatures = mongoose.model('OtherFeatures', OtherFeaturesSchema);

module.exports = OtherFeatures;
