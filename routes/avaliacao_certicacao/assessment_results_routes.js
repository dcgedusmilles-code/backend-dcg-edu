const express = require('express');
const router = express.Router();
const controller = require('../../controllers/avaliacao_certicacao/assessment_results_controller');

/**
 * @swagger
 * tags:
 *   name: ResultadoAvaliacao
 *   description: Gestão de resultados de avaliações
 */

/**
 * @swagger
 * /resultados:
 *   get:
 *     summary: Lista todos os resultados
 *     tags: [ResultadoAvaliacao]
 *     responses:
 *       200:
 *         description: Lista de resultados
 *   post:
 *     summary: Cria um novo resultado
 *     tags: [ResultadoAvaliacao]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               avaliacao_id:
 *                 type: integer
 *               participante_id:
 *                 type: integer
 *               nota_reading:
 *                 type: number
 *               nota_writer:
 *                 type: number
 *               nota_speek:
 *                 type: number
 *               nota:
 *                 type: number
 *               status:
 *                 type: string
 *               observacao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Resultado criado
 *
 * /resultados/{id}:
 *   get:
 *     summary: Busca resultado por ID
 *     tags: [ResultadoAvaliacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resultado encontrado
 *       404:
 *         description: Resultado não encontrado
 *   put:
 *     summary: Atualiza resultado por ID
 *     tags: [ResultadoAvaliacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Resultado atualizado
 *       404:
 *         description: Resultado não encontrado
 *   delete:
 *     summary: Remove resultado por ID
 *     tags: [ResultadoAvaliacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Resultado removido
 *       404:
 *         description: Resultado não encontrado
 */
router.get('/all', controller.index);
router.get('/getById/:id', controller.show);
router.post('/create', controller.create);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
