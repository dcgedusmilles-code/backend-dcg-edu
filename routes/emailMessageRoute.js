const express = require("express");
const router = express.Router();
const ContactMessage = require("../controller/emailMessageCtrl");

router.post("/sendEmail", sendEmail);
router.get("/", sendEmail);


module.exports = router;
