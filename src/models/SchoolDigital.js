const mongoose = require('mongoose');

const schoolDigitalSchema = new mongoose.Schema({
    formId: {
        type: String,
        required: true
    },
    schoolName: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    stateProvince: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    }
}, { timestamps: true });

// Create a Mongoose model for the school digital 
const SchoolDigital = mongoose.model('SchoolDigital', schoolDigitalSchema);

module.exports = SchoolDigital;
