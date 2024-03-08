const mongoose = require('mongoose');

// Define a schema for the partner community form
const partnerCommunityFormSchema = new mongoose.Schema({
    formId: {
        type: String,
        required: true
    },
    organizationName: {
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

// Create a Mongoose model for the partner community form
const PartnerCommunity = mongoose.model('PartnerCommunity', partnerCommunityFormSchema);

module.exports = PartnerCommunity;
