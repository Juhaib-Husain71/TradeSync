const router = require("express").Router();
const authController = require("../controllers/authController");
const {userVerification} = require("../middlewares/AuthMiddleware");
const {validateSignup} = require("../middlewares/validation");

router.post("/signup", validateSignup, authController.Signup);

router.post('/login', authController.Login);

router.post("/logout", userVerification, authController.Logout);

router.get("/me", userVerification, authController.getMe);


module.exports = router;