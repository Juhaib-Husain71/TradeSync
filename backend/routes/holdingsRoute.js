const express = require("express");
const router = express.Router();
const {userVerification} = require("../middlewares/AuthMiddleware");
const holdingsController = require("../controllers/holdingsController");

router.get("/", userVerification, holdingsController.getAllHoldings);

module.exports = router;