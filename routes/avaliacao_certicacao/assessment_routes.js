const express = require('express');
const router = express.Router();
const controller = require('../../controllers/avaliacao_certicacao/assessment_controller');

/**
 * @swagger
 * tags:
 *   name: Avaliacoes
 *   description: Gestão de avaliações
 */

/**
 * @swagger
 * /avaliacoes:
 *   get:
 *     summary: Lista todas as avaliações
 *     tags: [Avaliacoes]
 *     responses:
 *       200:
 *         description: Lista de avaliações
 *   post:
 *     summary: Cria uma nova avaliação
 *     tags: [Avaliacoes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo: { type: string }
 *               descricao: { type: string }
 *               data: { type: string, format: date }
 *               curso_id: { type: integer }
 *               turma_id: { type: integer }
 *               instrutor_id: { type: integer }
 *     responses:
 *       201:
 *         description: Avaliação criada
 *
 * /avaliacoes/{id}:
 *   get:
 *     summary: Busca uma avaliação pelo ID
 *     tags: [Avaliacoes]
 *   put:
 *     summary: Atualiza uma avaliação
 *     tags: [Avaliacoes]
 *   delete:
 *     summary: Remove uma avaliação
 *     tags: [Avaliacoes]
 */
router.get('/all', controller.index);
router.get('/getById/:id', controller.show);
router.post('/create', controller.create);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
