const mongoose = require('mongoose');

// Define a schema for the ambassador form
const ambassadorFormSchema = new mongoose.Schema({
    formId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
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

// Create a Mongoose model for the ambassador form
const Ambassador = mongoose.model('Ambassador', ambassadorFormSchema);

module.exports = Ambassador;
