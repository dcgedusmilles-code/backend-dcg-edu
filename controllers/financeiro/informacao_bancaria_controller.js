const service = require("../../services/financeiro/informacao_bancaria_service");

/**
 * @swagger
 * tags:
 *   - name: InformacoesBancarias
 *     description: Dados bancários para unidades/empresa
 */

/**
 * @swagger
 * /api/bancos:
 *   post:
 *     tags: [InformacoesBancarias]
 *     summary: Criar informação bancária
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               unidade_id: { type: integer }
 *               banco_nome: { type: string }
 *               conta: { type: string }
 *               agencia: { type: string }
 *               tipo_conta: { type: string }
 *               titular: { type: string }
 *               iban: { type: string }
 *     responses:
 *       201: { description: Criado }
 */
exports.create = async (req, res) => {
  try {
    const created = await service.create(req.body);
    return res.status(201).json(created);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.list = async (req, res) => {
  try {
    const data = await service.list(req.query);
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.get = async (req, res) => {
  try {
    const item = await service.get(req.params.id);
    return res.json(item);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await service.update(req.params.id, req.body);
    return res.json(updated);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await service.remove(req.params.id);
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
