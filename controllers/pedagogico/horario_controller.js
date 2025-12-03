const service = require("../../services/pedagogico/horario_service");

/**
 * @swagger
 * tags:
 *   - name: Horarios
 *     description: Gestão de horários de aulas
 */

/**
 * @swagger
 * /api/horarios:
 *   post:
 *     tags: [Horarios]
 *     summary: Criar horário de aula
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               curso_id: { type: integer }
 *               unidade_id: { type: integer }
 *               turma_id: { type: integer }
 *               professor_id: { type: integer }
 *               dia_semana: { type: string, enum: [segunda, terca, quarta, quinta, sexta, sabado, domingo] }
 *               inicio_hora: { type: string, example: "08:00:00" }
 *               fim_hora: { type: string, example: "10:00:00" }
 *               sala: { type: string }
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
