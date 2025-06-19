const express = require("express");
const router = express.Router();
const sendEmail = require("../controller/emailMessageCtrl");

router.post("/sendEmail", sendEmail);
router.get("/", sendEmail);


module.exports = router;
