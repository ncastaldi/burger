// Require external npm packages
const express = require("express");

const router = express.Router();

// Require local depenancies
const burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Export routes for server.js to use.
module.exports = router;