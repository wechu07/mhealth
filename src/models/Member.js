const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  formId: { type: String, required: true },
  name: { type: String },
  email: { type: String },
  registration_number: { type: String },
  license_number: { type: String },
  picture: { type: String },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
