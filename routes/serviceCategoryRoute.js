
const express = require("express");
const router = express.Router();

const { authMiddleware } = require("./../middlewares/authMiddleware");
const checkPermission = require("./../middlewares/checkPermission");


const {
    createServiceCategory,
    getAllCategory,
    getOneServiceCategory,
    updateCategoryService,
    deleteCategoryService,
} = require("../controller/serviceCategoryCtrl");


router.post(
    "/category",
    authMiddleware,
    checkPermission("create"),
    createServiceCategory
);

//Category service route

router.get(
    "/category",
    authMiddleware,
    checkPermission("read"),
    getAllCategory
);
router.get(
    "/category/:id",
    authMiddleware,
    checkPermission("read"),
    getOneServiceCategory
);
router.put(
    "/category/:id",
    authMiddleware,
    checkPermission("update"),
    updateCategoryService
);
router.delete(
    "/category/:id",
    authMiddleware,
    checkPermission("delete"),
    deleteCategoryService
);

module.exports = router;
