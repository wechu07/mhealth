const router = require("express").Router();
const Joi = require("joi");
const Donation = require("../models/Donation");

const donation = async (req, res) => {
  const { name, email, custom_amount } = req.body;

  if (custom_amount) {
    const parsedAmount = parseFloat(custom_amount);

    console.log(`Data: custom_amount = ${parsedAmount}, name = ${name}, email = ${email}`);

    const newDonation = new Donation({ amount: parsedAmount, name, email });

    try {
      const savedDonation = await newDonation.save();
      console.log(`SavedDonation: ${savedDonation}`);

      res.status(200).redirect(`/partner`);
    } catch (err) {
      console.log(err);
      res.redirect("/donate");
    }
  } else {
    const { amount } = req.body;
    const parsedAmount = parseFloat(amount);

    console.log(`Data: amount = ${parsedAmount}, name = ${name}, email = ${email}`);

    const newDonation = new Donation({ amount: parsedAmount, name, email });

    try {
      const savedDonation = await newDonation.save();
      console.log(`SavedDonation: ${savedDonation}`);

      res.status(200).redirect(`/partner`);
    } catch (err) {
      console.log(err);
      res.redirect("/donate");
    }
  }
};



module.exports = { donation };
