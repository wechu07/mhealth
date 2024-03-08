const router = require("express").Router();

const PartnerExchange = require("../models/PartnerExchange");
const SponsorExchange = require("../models/SponsorExchange");
const Contact = require("../models/Contact");
const Member = require("../models/Member");
const Ambassador = require("../models/Ambassador");
const PartnerCommunity = require("../models/PartnerCommunity");
const SchoolDigital = require("../models/SchoolDigital");
const SponsorCommunity = require("../models/SponsorCommunity");
const SponsorDigital = require("../models/SponsorDigital");

router.post("/", async (req, res) => {
  const formId = req.body.formId;
  console.log(req.body);
  try {
    switch (formId) {
      case "contact-form":
        await Contact.create(req.body);
        break;
      case "practitioner":
        await Member.create(req.body);
        break;
      case "nurses":
        await Member.create(req.body);
        break;
      case "medstudent":
        await Member.create(req.body);
        break;
      case "chealth":
        await Member.create(req.body);
        break;
      case "partner-exchange":
        await PartnerExchange.create(req.body);
        break;
      case "sponsor-exchange":
        await SponsorExchange.create(req.body);
        break;
      case "ambassador-form":
        await Ambassador.create(req.body);
        break;
      case "partner-form-community":
        await PartnerCommunity.create(req.body);
        break;
      case "school-form-digital":
        await SchoolDigital.create(req.body);
        break;
      case "sponsor-form-community":
        await SponsorCommunity.create(req.body);
        break;
      case "sponsor-form-digital":
        await SponsorDigital.create(req.body);
        break;
      default:
        throw new Error("Invalid formId");
    }
    res.status(200).redirect("back");
  } catch (error) {
    console.error("Error handling form submission:", error);
    res.status(500).send("An error occurred while processing your request");
  }
});

module.exports = router;
