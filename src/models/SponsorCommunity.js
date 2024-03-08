const mongoose = require('mongoose');

// Define a schema for the sponsor community form
const sponsorCommunityFormSchema = new mongoose.Schema({
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

// Create a Mongoose model for the sponsor community form
const SponsorCommunity = mongoose.model('SponsorCommunity', sponsorCommunityFormSchema);

module.exports = SponsorCommunity;
