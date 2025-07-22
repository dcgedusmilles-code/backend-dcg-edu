const express = require("express");
const router = express.Router();

const {
    getUserCart,
    emptyCart,
    userCart,
    applyCoupon,
    createOrder,
} = require("../controller/cartCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.get("/cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);


module.exports = router;
