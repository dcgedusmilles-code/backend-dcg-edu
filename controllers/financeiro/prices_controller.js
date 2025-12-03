const precoService = require('../../services/financeiro/prices_service');

/**
 * @swagger
 * tags:
 *   - name: Preços
 *     description: Gestão de preços por curso e unidade
 */

/**
 * @swagger
 * /api/precos:
 *   post:
 *     tags: [Preços]
 *     summary: Criar um preço para um curso/unidade
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               curso_id: { type: integer }
 *               unidade_id: { type: integer }
 *               preco_individual: { type: number }
 *               preco_para_2: { type: number }
 *               preco_para_3_ou_mais: { type: number }
 *               desconto_percentual: { type: number }
 *               moeda: { type: string }
 *               valido_de: { type: string, format: date }
 *               valido_ate: { type: string, format: date }
 *     responses:
 *       201:
 *         description: Preço criado
 */
exports.create = async (req, res) => {
  try {
    const created = await precoService.create(req.body);
    return res.status(201).json(created);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.list = async (req, res) => {
  try {
    const items = await precoService.list(req.query);
    return res.json(items);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.get = async (req, res) => {
  try {
    const item = await precoService.get(req.params.id);
    return res.json(item);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await precoService.update(req.params.id, req.body);
    return res.json(updated);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await precoService.remove(req.params.id);
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
