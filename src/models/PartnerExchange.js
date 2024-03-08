const mongoose = require('mongoose');

// Define a schema for the exchange form
const partnerExchangeFormSchema = new mongoose.Schema({
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
const PartnerExchange = mongoose.model('PartnerExchange', partnerExchangeFormSchema);

module.exports = PartnerExchange;
