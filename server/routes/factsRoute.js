const express = require("express");
const router = express.Router();
 
const FactssController = require("../controllers/factsAPIController");
 
console.log("I'm in the Facts router")
 
router.get("/random-qoute", FactssController.getRandomFact);
router.get("/daily-qoute", FactssController.getDailyFact);
 
module.exports = router;