const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { generateToken } = require("../config/jwtToken");
const validateId = require("../utils/validateRegisterId");
const { generateRefreshToken } = require("../config/refreshtoken");
const sendEmail = require("./emailMessageCtrl");
const { Op } = require("sequelize");


const createUser = asyncHandler(async (req, res) => {
  const { email, mobile, password, firstname, lastname } = req.body;

  if (!email || !password || !firstname || !lastname || !mobile) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(409).json({ message: "Usuário já existe com este e-mail." });
  }

  const existingPhone = await User.findOne({ where: { mobile } });
  if (existingPhone) {
    return res.status(409).json({ message: "Usuário já existe com este número." });
  }

  const user = await User.create({ email, password, firstname, lastname, mobile });

  res.status(201).json({
    id: user.id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
    mobile: user.mobile,
    role: user.role,
    createdAt: user.createdAt,
  });
});


const loginHandler = async ({ email, password, role }) => {
  // Busca usuário pelo email
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("User not found");
  }

  // Verifica role, se fornecida
  if (role && user.role !== role) {
    throw new Error("Not Authorized");
  }

  // Valida a senha (método do model, similar ao Mongoose)
  const isPasswordValid = await user.isPasswordMatched(password);

  if (!isPasswordValid) {
    throw new Error("Invalid Credentials");
  }

  // Gera o refreshToken
  const refreshToken = await generateRefreshToken(user.id);

  // Atualiza o refreshToken no banco (usando update)
  await User.update(
    { refreshToken },
    { where: { id: user.id } }
  );

  // Monta dados do usuário para retorno
  const userData = {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    mobile: user.mobile,
    role: user.role,
    token: generateToken(user.id),
  };

  return { userData, refreshToken };
};

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // Usa o loginHandler (que já usa Sequelize)
    const { userData, refreshToken } = await loginHandler({ email, password });

  // Define cookie de refresh token
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000, // 72h
    });

    // Retorna dados do usuário + refreshToken
    res.status(200).json({ ...userData, refreshToken });
  } catch (error) {
    // Trate erros (exemplo: user não encontrado ou senha inválida)
    res.status(401).json({ message: error.message || "Login failed" });
  }
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // Usando loginHandler para validar usuário e role admin
    const { userData, refreshToken } = await loginHandler({ email, password, role: "admin" });

  // Define cookie de refreshToken (httpOnly, 72h)
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

    // Retorna dados do admin, sem refreshToken no corpo da resposta
    res.status(200).json(userData);
  } catch (error) {
    res.status(401).json({ message: error.message || "Login failed" });
  }
});

const handleRefreshToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    res.status(401);
    throw new Error("No Refresh Token in Cookies");
  }

  // Buscar usuário com esse refreshToken no banco
  const user = await User.findOne({ where: { refreshToken } });
  if (!user) {
    res.status(403);
    throw new Error("Refresh token not found in database or not matched");
  }

  // Verificar validade do refresh token
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id.toString() !== decoded.id) {
      res.status(403);
      throw new Error("Invalid refresh token");
    }

    // Gerar um novo access token
    const accessToken = generateToken(user.id);
    res.json({ accessToken });
  });
});

const logout = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    res.status(400);
    throw new Error("No Refresh Token in Cookies");
  }

  // Buscar usuário pelo refreshToken
  const user = await User.findOne({ where: { refreshToken } });

  if (!user) {
    // Se não encontrou o usuário, limpa o cookie mesmo assim
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    return res.sendStatus(204); // No Content
  }

  // Atualizar o usuário removendo o refreshToken no banco
  await user.update({ refreshToken: null });

  // Limpar cookie no cliente
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  res.sendStatus(204); // No Content
});

const updatedUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  validateId(userId); // valide conforme sua regra

  const { firstname, lastname, email, mobile } = req.body;
  const updateData = { firstname, lastname, email, mobile };

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    // Atualiza os campos permitidos
    await user.update(updateData);

    res.json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const saveAddress = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  validateId(userId);

  const { address } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    await user.update({ address });

    res.json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Wishlist, // modelo associado
          as: "wishlist", // o alias usado na associação, ajuste conforme seu setup
        },
      ],
    });
    res.json(users);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getAUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);

  try {
    const user = await User.findByPk(id, {
      include: [
        {
          model: Wishlist,
          as: "wishlist",
        },
      ],
    });

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    res.json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);

  try {
    const deleted = await User.destroy({
      where: { id }
    });

    if (!deleted) {
      return res.status(404).json({ message: "Usuário não encontrado para deletar" });
    }

    res.json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);

  try {
    // Atualiza o campo isBlocked para true
    const [updatedRows] = await User.update(
      { isBlocked: true },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Usuário não encontrado para bloquear" });
    }

    // Buscar usuário atualizado para retorno
    const blockedUser = await User.findByPk(id);
    res.json(blockedUser);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);

  try {
    const [updatedRows] = await User.update(
      { isBlocked: false },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Usuário não encontrado para desbloquear" });
    }

    const unblockedUser = await User.findByPk(id);
    res.json({ message: "Usuário desbloqueado com sucesso", user: unblockedUser });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const updatePassword = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { password } = req.body;

  validateId(userId);

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  // Buscar usuário
  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  // Atualizar senha com hash (supondo método setPassword no modelo Sequelize)
  user.password = password; // se usa hook para hash no model
  await user.save();

  res.json({
    message: "Senha atualizada com sucesso",
    user: {
      _id: user.id,  // Sequelize usa id por padrão
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    },
  });
});

const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email é obrigatório" });
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado com este email" });
  }

  try {
    // Supondo que o método createPasswordResetToken seja implementado no modelo User
    const token = await user.createPasswordResetToken();
    await user.save();

    const resetURL = `
      Hi, Please follow this link to reset Your Password.
      This link is valid for 10 minutes.
      <a href="http://localhost:5000/api/user/reset-password/${token}">Click Here</a>
    `;

    const emailData = {
      to: email,
      text: "Password reset request",
      subject: "Forgot Password Link",
      html: resetURL,
    };

    await sendEmail(emailData);

    res.json({ message: "Link para resetar a senha enviado para o email", token });
  } catch (error) {
    res.status(500);
    throw new Error("Erro ao enviar email de recuperação: " + error.message);
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;

  if (!password) {
    return res.status(400).json({ message: "Password é obrigatório" });
  }

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  // Buscar usuário pelo token e que o token não tenha expirado
  const user = await User.findOne({
    where: {
      passwordResetToken: hashedToken,
      passwordResetExpires: { [Op.gt]: new Date() }, // Op.gt > now
    },
  });

  if (!user) {
    return res.status(400).json({ message: "Token expirado ou inválido. Por favor, tente novamente." });
  }

  // Atualizar senha e limpar campos de reset
  user.password = password;  // Hash via hook do model Sequelize
  user.passwordResetToken = null;
  user.passwordResetExpires = null;

  await user.save();

  res.json({ message: "Senha resetada com sucesso" });
});

module.exports = {
  createUser,
  loginHandler,
  loginUserCtrl,
  loginAdmin,
  handleRefreshToken,
  logout,
  updatePassword,
  saveAddress,
  getAllUsers,
  getAUser,
  getUserProfile,
  deleteUser,
  updatedUser,
  blockUser,
  unblockUser,
  forgotPasswordToken,
  resetPassword,
};
