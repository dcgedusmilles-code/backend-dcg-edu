// src/services/authService.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const userRepository = require("../../repositories/user/user_repository");

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "refreshsecret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "3d";

const authService = {

  async register(userData) {
    const { firstname, lastname, email, mobile, password, role, address } =
      userData;

    // 🔍 Verifica se o usuário já existe
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("E-mail já cadastrado.");
    }

    // ❌ NÃO precisa hashear aqui, o hook beforeCreate já faz isso
    const newUser = await userRepository.create({
      firstname,
      lastname,
      email,
      mobile,
      password, // senha pura, será hasheada no hook
      role: role || "user",
      address,
    });

    const accessToken = generateAccessToken(newUser);
    const refreshToken = generateRefreshToken(newUser);

    return {
      user: sanitizeUser(newUser),
      tokens: { accessToken, refreshToken },
    };
  },

  async listUsers() {
  return await userRepository.findAll();
},

  async getUserById(id){
    const user = await userRepository.findById(id);
  if (!user) throw new Error('Usuário não encontrado');
  return user;
  },

  async removeUser (id) {
  const user = await userRepository.findById(id);
  if (!user) throw new Error('Usuário não encontrado');
  await userRepository.remove(id);
  return true;
},

async getCurrentUser (userId){
  const user = await userRepository.findById(userId);
  if (!user) throw new Error('Usuário não encontrado');
  return user;
},


  async login(email, password) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error("Usuário não encontrado.");

      const hash = user.password || user.dataValues?.password;

    const isValid = await bcrypt.compareSync(password, hash);
    console.log("user",user)
    console.log("-----------hash-------------", hash)
    console.log("-----------isValid-------------", isValid)
    if (!isValid) throw new Error("Senha incorreta.");

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
      user: sanitizeUser(user),
      tokens: { accessToken, refreshToken },
    };
  },

  /**
   * Gera um novo access token a partir de um refresh token válido
   */
  async refreshToken(token) {
    if (!token) throw new Error("Token de atualização não fornecido.");

    try {
      const decoded = jwt.verify(token, JWT_REFRESH_SECRET);
      const user = await userRepository.findById(decoded.id);
      if (!user) throw new Error("Usuário não encontrado.");

      const newAccessToken = generateAccessToken(user);
      return { accessToken: newAccessToken };
    } catch (err) {
      throw new Error("Refresh token inválido ou expirado.");
    }
  },

  /**
   * Invalida um refresh token (poderia ser salvo em blacklist)
   */
  async logout(_refreshToken) {
    // Implementar lógica de blacklist se necessário
    return { message: "Logout realizado com sucesso." };
  },

  /**
   * Envia link de redefinição de senha
   * (neste exemplo, apenas retorna o token)
   */
  async requestPasswordReset(email) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error("Usuário não encontrado.");

    const resetToken = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "15m",
    });

    // Aqui normalmente enviaria o e-mail:
    // await sendResetEmail(user.email, resetToken);

    return { message: "Link de redefinição gerado.", token: resetToken };
  },

  /**
   * Redefine a senha de um usuário com um token válido
   */
  async resetPassword(token, newPassword) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await userRepository.findById(decoded.id);
      if (!user) throw new Error("Usuário não encontrado.");

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await userRepository.updatePassword(user.id, hashedPassword);

      return { message: "Senha redefinida com sucesso." };
    } catch (err) {
      throw new Error("Token inválido ou expirado.");
    }
  },

  /**
   * Atualiza a senha de um usuário autenticado
   */
  async changePassword(userId, oldPassword, newPassword) {
    const user = await userRepository.findById(userId);
    if (!user) throw new Error("Usuário não encontrado.");

    const isValid = await bcrypt.compare(oldPassword, user.password);
    if (!isValid) throw new Error("Senha atual incorreta.");

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await userRepository.updatePassword(user.id, hashedPassword);

    return { message: "Senha atualizada com sucesso." };
  },
};

// ======================================================
// Funções auxiliares
// ======================================================

function generateAccessToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

function generateRefreshToken(user) {
  return jwt.sign({ id: user.id }, JWT_REFRESH_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRES_IN,
  });
}

function sanitizeUser(user) {
  const { password, ...cleanUser } = user.toJSON ? user.toJSON() : user;
  return cleanUser;
}

module.exports = authService;
