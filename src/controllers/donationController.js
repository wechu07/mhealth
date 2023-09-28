const router = require("express").Router();
const Joi = require("joi");
const Donation = require("../models/Donation");

const donation = async (req, res) => {
  const { amount, name, email } = req.body;
  const parsedAmount = Number(amount);
  console.log(amount, name, email);


  console.log(
    `Data: amount = ${parsedAmount}, name = ${name}, email = ${email}`
  );
  const newDonation = new Donation({ parsedAmount, name, email });
  try {
    const savedDonation = await newDonation.save();
    console.log(`SavedDonation: ${savedDonation}`);

    res.status(200).redirect(`/partner`);
  } catch (err) {
    console.log(err);
    res.redirect("/donate");
  }
};

module.exports = { donation };
