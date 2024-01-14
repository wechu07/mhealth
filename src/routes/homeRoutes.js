const router = require("express").Router();
const { donation } = require("../controllers/donationController");

router.get("/", (req, res) => {
  const page = "Home";
  res.render("home", { page });
});

router.get("/about", (req, res) => {
  const page = "About Us";
  res.render("about", { page });
});

router.get("/team", (req, res) => {
  const page = "Meet Our Members";
  res.render("team", { page });
});

router.get("/focus", (req, res) => {
  const page = "Our Focus Areas";
  res.render("focus", { page });
});

router.get("/signup", (req, res) => {
  const page = "Member Signup";
  res.render("signup", { page });
});

router.get("/communityhealth", (req, res) => {
  const page = "Community Health Worker Signup";
  // res.render("signup", { page });
  res.render("chealth", { page });
});

router.get("/juniordoctor", (req, res) => {
  const page = "Junor Doctor Signup";
  // res.render("signup", { page });
  res.render("juniordoctor", { page });
});

router.get("/nurse", (req, res) => {
  const page = "Nurse Signup";
  // res.render("signup", { page });
  res.render("nurse", { page });
});

router.get("/medstudent", (req, res) => {
  const page = "Medical Student Signup";
  // res.render("signup", { page });
  res.render("medstudent", { page });
});

router.get("/members", (req, res) => {
  const page = "See our Members";
  res.render("members", { page });
});

router.get("/fundraising", (req, res) => {
  const page = "Fundraising";
  res.render("fundraising", { page });
});

router.get("/partner", (req, res) => {
  const page = "Partner With Us";
  res.render("partner", { page });
});

router.get("/stakeholders", (req, res) => {
  const page = "Stakeholders";
  res.render("stakeholders", { page });
});

router.get("/gallery", (req, res) => {
  const page = "Gallery";
  res.render("gallery", { page });
});

router.get("/resources", (req, res) => {
  const page = "Resources";
  res.render("resources", { page });
});


// Donation logic
router.get("/donate", (req, res) => {
  const page = "Donate";
  res.render("donate", { page });
});

router.post("/donate", donation);

router.get("/contact", (req, res) => {
  const page = "Contact Us";
  res.render("contact", { page });
});

module.exports = router;
