const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { User } = require("../models"); // Importação correta para Sequelize

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  // Verifica se o token está presente no header de autorização
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Método correto para Sequelize: findByPk
      const user = await User.findByPk(decoded.id, {
        attributes: { exclude: ['password'] } // Equivalente ao .select('-password')
      });

      if (!user) {
        return res.status(401).json({ message: "Usuário não encontrado" });
      }

      req.user = user.get({ plain: true }); // Converte para objeto simples
      next();
    } catch (error) {
      console.error("Erro de autenticação:", error.message);
      return res.status(401).json({ message: "Token inválido ou expirado" });
    }
  } else {
    return res.status(401).json({ message: "Token não fornecido ou mal formatado" });
  }
});

// Middleware para autorização de admin (atualizado para Sequelize)
const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Acesso negado: administrador apenas" });
  }
  next();
};

module.exports = { authMiddleware, isAdmin };