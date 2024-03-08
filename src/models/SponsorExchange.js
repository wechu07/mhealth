const mongoose = require('mongoose');

// Define a schema for the exchange form
const sponsorExchangeFormSchema = new mongoose.Schema({
    formId: {
        type: String,
        required: true
    },
    institutionName: {
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

// Create a Mongoose model for the exchange form
const SponsorExchange = mongoose.model('SponsorExchange', sponsorExchangeFormSchema);

module.exports = SponsorExchange;
