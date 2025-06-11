const roles = require("../utils/roles");

/**
 * Middleware para verificar permissões de acordo com a role do usuário
 * @param {string} action - A ação que será verificada (ex: "create", "update", etc.)
 */
const checkPermission = (action) => {
  return (req, res, next) => {
    const userRole = req.user?.role;

    // Verifica se a role existe e se tem permissão para a ação
    if (!userRole || !roles[userRole]?.includes(action)) {
      return res.status(403).json({ message: "Acesso negado: permissão insuficiente." });
    }

    next(); // Permissão concedida
  };
};

module.exports = checkPermission;
