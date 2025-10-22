const express = require('express');
const router = express.Router();
const recursoController = require('../../controllers/avaliacao_certicacao/assessment_resources_controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     RecursoAvaliacao:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         resultado_id:
 *           type: integer
 *           example: 2
 *         participante_id:
 *           type: integer
 *           example: 5
 *         data_solicitacao:
 *           type: string
 *           format: date-time
 *           example: "2025-09-30T12:00:00Z"
 *         justificativa:
 *           type: string
 *           example: "Solicito revisão da avaliação."
 *         status:
 *           type: string
 *           example: "pendente"
 */

/**
 * @swagger
 * /recursos:
 *   get:
 *     summary: Lista todos os recursos de avaliação
 *     tags: [RecursoAvaliacao]
 *     responses:
 *       200:
 *         description: Lista retornada
 *   post:
 *     summary: Cria um novo recurso
 *     tags: [RecursoAvaliacao]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecursoAvaliacao'
 *     responses:
 *       201:
 *         description: Criado com sucesso
 * /recursos/{id}:
 *   get:
 *     summary: Busca recurso por ID
 *     tags: [RecursoAvaliacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Recurso encontrado
 *       404:
 *         description: Não encontrado
 *   put:
 *     summary: Atualiza um recurso
 *     tags: [RecursoAvaliacao]
 *   delete:
 *     summary: Remove um recurso
 *     tags: [RecursoAvaliacao]
 */

router.get('/all', recursoController.findAll);
router.get('/getById/:id', recursoController.findById);
router.post('/create', recursoController.create);
router.put('/update/:id', recursoController.update);
router.delete('/delete/:id', recursoController.delete);

module.exports = router;

