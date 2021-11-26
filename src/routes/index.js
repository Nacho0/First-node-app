const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.html", {title : "TravelWorld"});
});

router.get("/contact", (req, res) => {
    res.render("contact.html", {title :"Contact US"});
});

module.exports = router;