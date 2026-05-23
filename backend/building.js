const mongoose = require('mongoose');

const BuildingSchema = new mongoose.Schema({
    name: String,
    location: String,
    floors: Number,
    year: Number
});

module.exports = mongoose.model('Building', BuildingSchema);