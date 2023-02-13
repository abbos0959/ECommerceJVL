const express = require("express");
const router = express.Router();

const AuthController = require("../controller/authController");

router.route("/register").post(AuthController.Register);
router.route("/login").post(AuthController.Login);
router.route("/logout").get(AuthController.Logout);

module.exports = router;
