const express = require('express');
const router = express.Router();
const feedbackController = require('../../controllers/avaliacao_certicacao/assessment_feedbacks_controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     FeedbackAvaliacao:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         avaliacao_id:
 *           type: integer
 *           example: 2
 *         participante_id:
 *           type: integer
 *           example: 5
 *         comentario:
 *           type: string
 *           example: "Excelente atividade"
 *         nota:
 *           type: integer
 *           example: 4
 *         data:
 *           type: string
 *           format: date-time
 *           example: "2025-09-30T10:00:00.000Z"
 */

/**
 * @swagger
 * /feedbacks:
 *   get:
 *     summary: Lista todos os feedbacks
 *     tags: [FeedbackAvaliacao]
 *     responses:
 *       200:
 *         description: Lista de feedbacks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FeedbackAvaliacao'
 *
 *   post:
 *     summary: Cria um novo feedback
 *     tags: [FeedbackAvaliacao]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FeedbackAvaliacao'
 *     responses:
 *       201:
 *         description: Feedback criado com sucesso
 *
 * /feedbacks/{id}:
 *   get:
 *     summary: Busca um feedback pelo ID
 *     tags: [FeedbackAvaliacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do feedback
 *     responses:
 *       200:
 *         description: Feedback encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FeedbackAvaliacao'
 *       404:
 *         description: Feedback não encontrado
 *
 *   put:
 *     summary: Atualiza um feedback pelo ID
 *     tags: [FeedbackAvaliacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FeedbackAvaliacao'
 *     responses:
 *       200:
 *         description: Feedback atualizado com sucesso
 *       404:
 *         description: Feedback não encontrado
 *
 *   delete:
 *     summary: Remove um feedback pelo ID
 *     tags: [FeedbackAvaliacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       204:
 *         description: Feedback removido com sucesso
 *       404:
 *         description: Feedback não encontrado
 */

router.get('/all', feedbackController.getAll);
router.get('/getById/:id', feedbackController.getById);
router.post('/create', feedbackController.create);
router.put('/update/:id', feedbackController.update);
router.delete('/delete/:id', feedbackController.delete);

module.exports = router;