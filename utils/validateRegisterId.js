// utils/validateId.js
const validateId = (id) => {
  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId) || parsedId <= 0) {
    throw new Error("ID inválido");
  }
  return parsedId;
};

module.exports = validateId;
