const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const validateId = require("../utils/validateRegisterId");
const { generateRefreshToken } = require("../config/refreshtoken");
const { Op } = require("sequelize");
const sendEmail = require("./emailMessageCtrl");
var User = require('../models').User;
var UserWishlist = require('../models').UserWishlist;

const createUser = asyncHandler(async (req, res) => {
  const { email, mobile, password, firstname, lastname,role } = req.body;

   if (!email || !password || !firstname || !lastname) {
    return res.status(400).json({ message: "Firstname, lastname, email e senha são obrigatórios." });
  }

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(409).json({ message: "Usuário já existe com este e-mail." });
  }

  if (mobile) {
    const existingPhone = await User.findOne({ where: { mobile } });
    if (existingPhone) {
      return res.status(409).json({ message: "Usuário já existe com este número." });
    }
  }

  const user = await User.create({ email, password, firstname, lastname, mobile,role });

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
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("User not found");
  }
  if (role && user.role !== role) {
    throw new Error("Not Authorized");
  }

  const isPasswordValid = await user.isPasswordMatched(password);

  if (!isPasswordValid) {
    throw new Error("Invalid Credentials");
  }

  const refreshToken = await generateRefreshToken(user.id);

  await User.update(
    { refreshToken },
    { where: { id: user.id } }
  );

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
    const { userData, refreshToken } = await loginHandler({ email, password });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000, // 72h
    });

    res.status(200).json({ ...userData, refreshToken });
  } catch (error) {
    res.status(401).json({ message: error.message || "Login failed" });
  }
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const { userData, refreshToken } = await loginHandler({ email, password, role: "admin" });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

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

  const user = await User.findOne({ where: { refreshToken } });
  if (!user) {
    res.status(403);
    throw new Error("Refresh token not found in database or not matched");
  }

  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id.toString() !== decoded.id) {
      res.status(403);
      throw new Error("Invalid refresh token");
    }
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

  const user = await User.findOne({ where: { refreshToken } });

  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    return res.sendStatus(204); 
  }

  await user.update({ refreshToken: null });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  res.sendStatus(204); 
});

const updatedUser = asyncHandler(async (req, res) => {
  const userId= req.params.id;
  const { firstname, lastname, email, mobile } = req.body;
  const updateData = { firstname, lastname, email, mobile };

  try {
    const user = await User.findOne({ where: {id : userId } });
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    await user.update(updateData);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error updating user", 
      userId: userId || "Unknown",
      updateData: updateData
    });
    throw new Error(error.message);
  }
});

const saveAddress = asyncHandler(async (req, res) => {
  const userId = req.user.id;
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
          model: UserWishlist, 
          as: "wishlist",
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
          model: UserWishlist,
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
    const [updatedRows] = await User.update(
      { isBlocked: true },
      { where: { id } }
    );
    if (updatedRows === 0) {
      return res.status(404).json({ message: "Usuário não encontrado para bloquear" });
    }
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
  const userId = req.user.id;
  const { password } = req.body;
  validateId(userId);
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }
  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  user.password = password;
  await user.save();

  res.json({
    message: "Senha atualizada com sucesso",
    user: {
      _id: user.id,
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
  const user = await User.findOne({
    where: {
      passwordResetToken: hashedToken,
      passwordResetExpires: { [Op.gt]: new Date() }, 
    },
  });

  if (!user) {
    return res.status(400).json({ message: "Token expirado ou inválido. Por favor, tente novamente." });
  }

  user.password = password;
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
