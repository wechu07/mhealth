const router = require("express").Router();

router.get("/", (req, res) => {
  const page = "Home";
  res.render("home", { page });
});

router.get("/v2", (req, res) => {
  const page = "Home";
  res.render("homev2", { page });
});

router.get("/v3", (req, res) => {
  const page = "Home";
  res.render("homev3", { page });
});

router.get("/v4", (req, res) => {
  const page = "Home";
  res.render("homev4", { page });
});

router.get("/v5", (req, res) => {
  const page = "Home";
  res.render("homev5", { page });
});

router.get("/v6", (req, res) => {
  const page = "Home";
  res.render("homev6", { page });
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

router.get("/donate", (req, res) => {
  const page = "Donate";
  res.render("donate", { page });
});

router.get("/contact", (req, res) => {
  const page = "Contact Us";
  res.render("contact", { page });
});

module.exports = router;
