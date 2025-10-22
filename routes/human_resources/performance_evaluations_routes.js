const express = require('express');
const controller = require('../../controllers/human_resources/performance_evaluations_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Avaliações de Desempenho
 *   description: Endpoints de gestão das avaliações
 */

/**
 * @swagger
 * /avaliacoes:
 *   get:
 *     summary: Lista todas as avaliações
 *     tags: [Avaliações de Desempenho]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /avaliacoes/{id}:
 *   get:
 *     summary: Busca uma avaliação por ID
 *     tags: [Avaliações de Desempenho]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Avaliação encontrada }
 *       404: { description: Avaliação não encontrada }
 */
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /avaliacoes:
 *   post:
 *     summary: Cria uma nova avaliação
 *     tags: [Avaliações de Desempenho]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AvaliacaoDesempenho'
 *     responses:
 *       201: { description: Criado com sucesso }
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /avaliacoes/{id}:
 *   put:
 *     summary: Atualiza uma avaliação
 *     tags: [Avaliações de Desempenho]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /avaliacoes/{id}:
 *   delete:
 *     summary: Exclui uma avaliação
 *     tags: [Avaliações de Desempenho]
 */
router.delete('/:id', controller.deletar);

module.exports = router;
