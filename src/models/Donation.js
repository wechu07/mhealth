const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  amount: {
    type: Number,
  },
  date: { type: Date, default: Date.now },
});

const Donation = mongoose.model("Donation", DonationSchema);
module.exports = Donation;
