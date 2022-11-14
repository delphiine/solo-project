const express = require("express");
const router = express.Router();
 
const QoutesController = require("../controllers/qouteAPIController");
 
console.log("I'm in the Qoutes router")
 
router.get("/random-qoute", QoutesController.getRandomQoute);
router.get("/daily-qoute", QoutesController.getDailyQoute);
 
module.exports = router;