// src/utils/validateRegisterId.js

/**
 * Valida se um ID de registro segue o padrão esperado.
 * Pode ser usado para IDs numéricos ou UUIDs.
 */
function validateRegisterId(id) {
  if (!id) return false;
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[4|5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const numericRegex = /^[0-9]+$/;

  return uuidRegex.test(id) || numericRegex.test(id);
}

module.exports = validateRegisterId;
