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
  const page = "Meet The Team";
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

router.get("/initiatives", (req, res) => {
  const page = "Initiatives";
  res.render("initiatives", { page });
});

router.get("/academy", (req, res) => {
  const page = "Academy";
  res.render("academy", { page });
});

router.get("/cancel", (req, res) => {
  const page = "Cancelled Payment";
  res.render("cancel", { page });
});

router.get("/communityhealth", (req, res) => {
  const page = "Community Health Worker Signup";
  res.render("chealth", { page });
});

router.get("/practice", (req, res) => {
  const page = "Health Practitioners and Institutions Signup";
  res.render("practice", { page });
});

router.get("/nurses", (req, res) => {
  const page = "Nurses Signup";
  res.render("nurse", { page });
});

router.get("/students", (req, res) => {
  const page = "Medical Student Signup";
  res.render("medstudent", { page });
});

router.get("/members", (req, res) => {
  const page = "See our Members";
  res.render("members", { page });
});

router.get("/fundraising", (req, res) => {
  // const page = "Fundraising";
  // res.render("fundraising", { page });
  res.redirect("members");
});

router.get("/take-action", (req, res) => {
  const page = "Take Action";
  res.render("take-action", { page });
});

router.get("/stakeholders", (req, res) => {
  const page = "Stakeholders";
  res.render("stakeholders", { page });
});

router.get("/gallery", (req, res) => {
  const page = "Gallery";
  res.render("gallery", { page });
});

router.get("/admin", (req, res) => {
  const page = "Admin";
  res.render("admin", { page });
});

router.get("/checkout", (req, res) => {
  const page = "Checkout";
  res.render("checkout", { page });
});

router.get("/admin/members", (req, res) => {
  const page = "Signed Up Members";
  res.render("admin", { page });
});

router.get("/resources", (req, res) => {
  const page = "Resources";
  res.render("resources", { page });
});

router.get("/newsletter", (req, res) => {
  const page = "Newsletter";
  res.render("newsletter", { page });
});

router.get("/terms", (req, res) => {
  const page = "Terms and Conditions";
  res.render("terms", { page });
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

// router.post("/submit", (req, res) => {
//   console.log(req.body);
//   res.redirect("/initiatives")
// });

module.exports = router;
