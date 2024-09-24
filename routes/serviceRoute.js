const express = require('express')
const {authMiddleware}= require("./../middlewares/authMiddleware")
const {serviceImgResize,uploadPhoto}= require("./../middlewares/uploadImage")
const  checkPermission = require("./../middlewares/checkPermission");
const { createService, getAllService, getOneService, updateService, deleteService } = require('../controller/serviceController/ServiceCtrl');
const {createServiceCategory,getAllCategory, getOneServiceCategory, updateCategoryService, deleteCategoryService} = require("./../controller/serviceController/serviceCategory")

const router = express.Router();

//Service routes
router.post("/",authMiddleware, checkPermission("create"),uploadPhoto.array("image",2),serviceImgResize, createService);
router.get("/",authMiddleware,checkPermission("read"), getAllService)
router.get("/:id", authMiddleware, checkPermission("read"), getOneService)
router.put("/:id",authMiddleware,checkPermission("update"),uploadPhoto.array("image",2),serviceImgResize,updateService)
router.delete("/:id",authMiddleware,checkPermission("delete"),deleteService)

//Category service route
router.post("/category", authMiddleware,checkPermission("create"),createServiceCategory)
router.get("/category",authMiddleware,checkPermission("read"), getAllCategory)
router.get("/category/:id", authMiddleware, checkPermission("read"), getOneServiceCategory)
router.put("/category/:id",authMiddleware,checkPermission("update"),updateCategoryService)
router.delete("/category/:id",authMiddleware,checkPermission("delete"),deleteCategoryService)


module.exports = router;