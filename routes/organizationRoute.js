const express = require("express");
const { createOrganization,updateOrganization,getOrganization,getallOrganization  } = require("../controller/organizationCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {checkDuplicateOrganization}= require('../middlewares/organization');

const checkPermission = require("./../middlewares/checkPermission")
const router = express.Router();

router.post("/", authMiddleware, checkPermission('create'),checkDuplicateOrganization, createOrganization);
router.put("/:id", authMiddleware, isAdmin, updateOrganization);
//router.delete("/:id", authMiddleware, isAdmin, deleteCategory);
 router.get("/:id", getOrganization);
router.get("/", getallOrganization );
module.exports = router;
