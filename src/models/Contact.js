const mongoose = require("mongoose");

// Define a schema for the contact
const contactSchema = new mongoose.Schema(
  {
    formId: { type: String, required: true },
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    subject: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Create a Mongoose model for the contact
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
