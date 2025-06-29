const express = require("express");
const router = express.Router();
const { sendEmail, getallSendEmail, deleteSendEmail, getASendEmail } = require("../controller/emailMessageCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/sendEmail", sendEmail);
router.get("/", getallSendEmail);
router.get("/:id", getASendEmail);
router.delete("/:id", authMiddleware, isAdmin, deleteSendEmail);


module.exports = router;
