const mongoose = require('mongoose');

const samplesSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        serialNo: Number,
        sampleWeight: Number,
        coating: String,
        substrate: String
    },
    {
        collection: 'samples'
    }
);

module.exports = mongoose.model('Sample', samplesSchema);