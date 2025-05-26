const express = require("express");
const router = express.Router();

const {
  createOrganization,
  updateOrganization,
  getOrganization,
  getallOrganization,
} = require("../controller/organizationCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { checkDuplicateOrganization } = require("../middlewares/organization");
const checkPermission = require("./../middlewares/checkPermission");

router.post(
  "/",
  authMiddleware,
  checkPermission("create"),
  checkDuplicateOrganization,
  createOrganization
);
router.put("/:id", authMiddleware, isAdmin, updateOrganization);
router.get("/:id", getOrganization);
router.get("/", getallOrganization);
module.exports = router;
