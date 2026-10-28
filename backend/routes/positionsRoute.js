const express = require("express");
const router = express.Router();
const {userVerification} = require("../middlewares/AuthMiddleware");
const positionsController = require("../controllers/positionsController");

router.get("/", userVerification, positionsController.getAllPositions);

module.exports = router;