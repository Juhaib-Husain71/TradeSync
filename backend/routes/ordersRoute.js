const express = require("express");
const router = express.Router();
const {userVerification} = require("../middlewares/AuthMiddleware");
const ordersController = require("../controllers/ordersController");
const {validateOrder} = require("../middlewares/validation");

router.route("/")
    .get(userVerification, ordersController.getAllOrders)
    .post(userVerification, validateOrder, ordersController.createOrder);

module.exports = router;