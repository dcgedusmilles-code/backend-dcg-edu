const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Middleware para autenticação via JWT
const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  // Verifica se o token está presente no header de autorização
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        res.status(401);
        throw new Error("Usuário não encontrado");
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Erro de autenticação:", error.message);
      res.status(401);
      throw new Error("Token inválido ou expirado");
    }
  } else {
    res.status(401);
    throw new Error("Token não fornecido ou mal formatado");
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
