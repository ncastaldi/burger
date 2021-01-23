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

router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.name, false], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// Export routes for server.js to use.
module.exports = router;