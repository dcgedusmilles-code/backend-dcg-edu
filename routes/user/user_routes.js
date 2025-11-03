// src/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../../controllers/user/user_controller");
const { authMiddleware, isAdmin } = require("../../middlewares/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Rotas de autenticação
 */

router.post("/register", authController.register);
router.get('/all', authMiddleware, authController.listAll);
router.get('/me', authMiddleware, authController.getMe);
router.get('/getById/:id', authMiddleware, authController.getById);
router.delete('/delete/:id', authMiddleware, authController.remove);
router.post("/login", authController.login);
router.post("/refresh", authController.refreshToken);
router.post("/logout", authController.logout);
router.post("/forgot-password", authController.requestPasswordReset);
router.post("/reset-password", authController.resetPassword);
router.post("/change-password", authMiddleware, authController.changePassword);

module.exports = router;
