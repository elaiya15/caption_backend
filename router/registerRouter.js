const express = require("express");
const register = require("../modules/registerModule");

const router = express.Router();

router.post("/forgotPassword", register.forgotPassword);
router.post("/signup", register.signup);
router.post("/signin", register.signin);
router.post("/changePassword/:randomString", register.changePassword);

module.exports = router;
