const express = require("express");
const router = express.Router();
const sendEmail = require("./../controller/emailCtrl");

router.post("/sendEmail", sendEmail);

module.exports = router;
