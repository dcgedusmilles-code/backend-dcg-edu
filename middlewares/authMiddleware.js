const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// const authMiddleware = asyncHandler(async (req, res, next) => {
//   let token;
//   if (req?.headers?.authorization?.startsWith("Bearer")) {
//     token = req.headers.authorization.split(" ")[1];
//     try {
//       if (token) {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await User.findById(decoded?.id);
//         req.user = user;
//         next();
//       }
//     } catch (error) {
//       throw new Error("Not Authorized token expired, Please Login again");
//     }
//   } else {
//     throw new Error(" There is no token attached to header");
//   }
// });

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers && req.headers.authorization) {
    console.log("Headers recebidos:", req.headers.authorization); // Log para depuração

    if (req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1]; // Pega o token após "Bearer"
    } else {
      console.error("Formato do token incorreto");
      return res.status(401).json({ message: "Token inválido" });
    }
  } else {
    console.error("Nenhum cabeçalho de autorização encontrado");
    return res.status(401).json({ message: "Token não fornecido" });
  }

  try {
    if (!token) {
      return res.status(401).json({ message: "Token não fornecido" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password"); // Exclui o campo senha

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Erro na autenticação:", error.message);
    return res.status(401).json({ message: "Token expirado ou inválido" });
  }
});

module.exports = authMiddleware;

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are not an admin");
  } else {
    next();
  }
});
module.exports = { authMiddleware, isAdmin };
