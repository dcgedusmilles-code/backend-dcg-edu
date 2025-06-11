const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Middleware para autenticação via JWT
const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers && req.headers.authorization) {
    if (req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      return res.status(401).json({ message: "Formato do token inválido" });
    }
  } else {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token expirado ou inválido" });
  }
});

// Middleware para autorização de admin, usando o usuário já carregado no req.user
const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Acesso negado: administrador apenas" });
  }
  next();
};

module.exports = { authMiddleware, isAdmin };
