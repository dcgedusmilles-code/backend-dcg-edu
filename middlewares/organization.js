const organizationModel = require("./../models/organizationModel");

const checkDuplicateOrganization = async (req, res, next) => {
  try {
    const { email, nif, mobile, name } = req.body;
    if (!email || !nif || !mobile || !name) {
      return res.status(400).json({
        message:
          "Os campos Name, email, NIF e número de telefone são obrigatórios.",
      });
    }
    const alreadyExist = await organizationModel.findOne({
      $or: [{ email }, { nif }, { mobile }],
    });

    if (alreadyExist) {
      // Verifica qual dos campos está duplicado e retorna a mensagem correspondente
      let duplicateField = "";
      if (alreadyExist.email === email) duplicateField = "email";
      else if (alreadyExist.nif === nif) duplicateField = "nif";
      else if (alreadyExist.mobile === mobile)
        duplicateField = "número de telefone";
      return res
        .status(400)
        .json({ message: `O ${duplicateField} já está em uso.` });
    }
    // Se não houver duplicatas, segue para a próxima função
    next();
  } catch (error) {
    next(error); // Passa o erro para o middleware de tratamento de erros
  }
};

module.exports = { checkDuplicateOrganization };
