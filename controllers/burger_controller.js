var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAllBugers(function(data) {
    var hbsObj = { burgers: data };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/api/addBurger", function(req, res) {
    burger.insertBurger(req.body.burger, function() {
        res.redirect('/');
    });
})

module.exports = router;
