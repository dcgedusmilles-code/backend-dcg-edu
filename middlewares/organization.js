const { Op } = require("sequelize");
const { Organization } = require("./../models");

const checkDuplicateOrganization = async (req, res, next) => {
  try {
    const { email, nif, mobile, name } = req.body;
    if (!email || !nif || !mobile || !name) {
      return res.status(400).json({
        message:
          "Os campos Nome, Email, NIF e Número de Telefone são obrigatórios.",
      });
    }
    const existingOrg = await Organization.findOne({
      where: {
        [Op.or]: [
          { email },
          { nif },
          { mobile }
        ],
      },
    });

    if (existingOrg) {
      let duplicateField = "";
      if (existingOrg.email === email) duplicateField = "email";
      else if (existingOrg.nif === nif) duplicateField = "NIF";
      else if (existingOrg.mobile === mobile) duplicateField = "número de telefone";
      return res.status(400).json({
        message: `O ${duplicateField} já está em uso.`,
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { checkDuplicateOrganization };
