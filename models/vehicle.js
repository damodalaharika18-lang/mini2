const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true,
        unique: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    serviceDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
