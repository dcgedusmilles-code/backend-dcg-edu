const express = require("express");
const router = express.Router();

const {
  getWishlist,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  updateOrderStatus,
  getAllOrders,
  getOrderByUserId,
} = require("../controller/orderCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", createEnquiry);
router.post("/applyCoupon/", applyCoupon);
router.post("/user/createOrder/", createOrder);
router.put("/user/:id", emptyCart,
);
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus,
  uploadImagesUser
);
router.delete("/user/:id", authMiddleware, isAdmin, deleteEnquiry);
router.get("/user/:id", getWishlist);
router.get("/user/:id", userCart);
router.get("/user/:id", getUserCart);
router.get("/:id", getOrderByUserId);
router.get("/", getAllOrders);

module.exports = router;