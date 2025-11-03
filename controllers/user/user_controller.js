// src/controllers/authController.js
const authService = require("../../services/user/user_service");

const authController = {
  async register(req, res) {
    try {
      const result = await authService.register(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async listAll (req, res){
  try {
    const users = await authService.listUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

async getById(req, res){
  try {
    const user = await authService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
},

async getMe(req, res){
  try {
    const userId = req.user.id; // vindo do middleware auth
    const user = await authService.getCurrentUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
},

async remove  (req, res) {
  try {
    await authService.removeUser(req.params.id);
    res.status(200).json({ message: 'Usuário removido com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
},

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  },

  async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;
      const result = await authService.refreshToken(refreshToken);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(403).json({ message: error.message });
    }
  },

  async logout(req, res) {
    try {
      const { refreshToken } = req.body;
      const result = await authService.logout(refreshToken);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async requestPasswordReset(req, res) {
    try {
      const { email } = req.body;
      const result = await authService.requestPasswordReset(email);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async resetPassword(req, res) {
    try {
      const { token, newPassword } = req.body;
      const result = await authService.resetPassword(token, newPassword);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async changePassword(req, res) {
    try {
      const { oldPassword, newPassword } = req.body;
      const userId = req.user.id;
      const result = await authService.changePassword(userId, oldPassword, newPassword);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = authController;
