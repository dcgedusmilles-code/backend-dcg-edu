const roles = require("./../utils/roles");

const checkPermission = (action) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!userRole || !roles[userRole] || !roles[userRole].includes(action)) {
      return res.status(403).json({ message: "Acesso negado" });
    }
    next();
  };
};

module.exports = checkPermission;
