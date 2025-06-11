const express = require("express");
const router = express.Router();

const {
  createUser,
  loginHandler,
  loginUserCtrl,
  loginAdmin,
  handleRefreshToken,
  logout,
  updatePassword,
  saveAddress,
  getAllUsers,
  getAUser,
  getUserProfile,
  deleteUser,
  updatedUser,
  blockUser,
  unblockUser,
  forgotPasswordToken,
  resetPassword,
  // getWishlist,
  // userCart,
  // getUserCart,
  // emptyCart,
  // applyCoupon,
  // createOrder,
  // getOrders,
  // updateOrderStatus,
  // getAllOrders,
  uploadImagesUser,
} = require("../controller/userCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.get("/all-users", getAllUsers);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);


// Rota protegida com autenticação
router.put("/password", authMiddleware, updatePassword);
router.get("/profile", authMiddleware, getUserProfile);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrders);
router.get("/wishlist", authMiddleware, getWishlist);
router.delete("/:id", authMiddleware, isAdmin, deleteUser);
router.get("/:id", authMiddleware, isAdmin, getAUser);
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus,
  uploadImagesUser
);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
