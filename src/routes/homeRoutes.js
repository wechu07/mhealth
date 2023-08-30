const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/team", (req, res) => {
  res.render("team");
});

router.get("/focus", (req, res) => {
  res.render("focus");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/members", (req, res) => {
  res.render("members");
});

router.get("/fundraising", (req, res) => {
  res.render("fundraising");
});

router.get("/partner", (req, res) => {
  res.render("partner");
});

router.get("/stakeholders", (req, res) => {
  res.render("stakeholders");
});

router.get("/gallery", (req, res) => {
  res.render("gallery");
});

router.get("/resources", (req, res) => {
  res.render("resources");
});

router.get("/donate", (req, res) => {
  res.render("donate");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
