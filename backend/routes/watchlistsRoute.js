const express = require("express");
const router = express.Router();
const {userVerification} = require("../middlewares/AuthMiddleware");
const watchlistsController = require("../controllers/watchlistsController");

router.get("/", userVerification, watchlistsController.getAllWatchlists);

module.exports = router;