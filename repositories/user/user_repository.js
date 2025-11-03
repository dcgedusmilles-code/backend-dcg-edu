const { User } = require("../../models");

const create = async (data) => {
  return await User.create(data, { individualHooks: true });
};

const findAll = async () => {
  return await User.findAll({
    attributes: { exclude: ['password', 'refreshToken', 'passwordResetToken'] },
    order: [['createdAt', 'DESC']],
  });
};

const findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

const findByMobile = async (mobile) => {
  return await User.findOne({ where: { mobile } });
};

const findByRefreshToken = async (token) => {
  return await User.findOne({ where: { refreshToken: token } });
};

const findById = async (id) => {
  return await User.findByPk(id, {
    attributes: { exclude: ['password', 'refreshToken', 'passwordResetToken'] },
  });
};

const updateRefreshToken = async (id, refreshToken) => {
  return await User.update({ refreshToken }, { where: { id } });
};

const update = async (id, data) => {
  const user = await findById(id);
  if (!user) return null;
  await user.update(data);
  return user;
};

const removeRefreshToken = async (id) => {
  return await update(id, { refreshToken: null });
};

const remove = async (id) => {
  const user = await findById(id);
  if (!user) return null;
  await user.destroy();
  return true;
};

module.exports = {
  create,
  findAll,
  findByEmail,
  findByMobile,
  findByRefreshToken,
  findById,
  updateRefreshToken,
  update,
  removeRefreshToken,
  remove
};
