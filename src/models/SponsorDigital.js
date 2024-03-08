const mongoose = require('mongoose');

// Define a schema for the sponsor digital form
const sponsorDigitalFormSchema = new mongoose.Schema({
    formId: {
        type: String,
        required: true
    },
    sponsorName: {
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

// Create a Mongoose model for the sponsor digital form
const SponsorDigital = mongoose.model('SponsorDigital', sponsorDigitalFormSchema);

module.exports = SponsorDigital;
