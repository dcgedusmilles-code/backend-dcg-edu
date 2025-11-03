const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findByPk(decoded.id, {
        attributes: { exclude: ['password'] } 
      });
      if (!user) {
        return res.status(401).json({ message: "Usuário não encontrado" });
      }
      req.user = user.get({ plain: true });
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token inválido ou expirado" });
    }
  } else {
    return res.status(401).json({ message: "Token não fornecido ou mal formatado" });
  }
});

const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin" || req.user.role !== "secretaria") {
    return res.status(403).json({ message: "Acesso negado: administrador apenas" });
  }
  next();
};

module.exports = { authMiddleware, isAdmin };