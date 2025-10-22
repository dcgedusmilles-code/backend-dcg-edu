const express = require('express');
const router = express.Router();
const AvaliacaoEstagioController = require('../../controllers/internship_and_professional_integration_office/evaluations_internship_controller');

/**
 * @swagger
 * tags:
 *   name: Avaliações de Estágio
 *   description: Gerenciamento de avaliações de estágios
 */

/**
 * @swagger
 * /avaliacoes:
 *   get:
 *     summary: Lista todas as avaliações
 *     tags: [Avaliações de Estágio]
 *     responses:
 *       200:
 *         description: Lista de avaliações retornada com sucesso
 */
router.get('/', AvaliacaoEstagioController.findAll);

/**
 * @swagger
 * /avaliacoes/{id}:
 *   get:
 *     summary: Obtém uma avaliação por ID
 *     tags: [Avaliações de Estágio]
 */
router.get('/:id', AvaliacaoEstagioController.findById);

/**
 * @swagger
 * /avaliacoes:
 *   post:
 *     summary: Cria uma nova avaliação
 *     tags: [Avaliações de Estágio]
 */
router.post('/', AvaliacaoEstagioController.create);

/**
 * @swagger
 * /avaliacoes/{id}:
 *   put:
 *     summary: Atualiza uma avaliação existente
 *     tags: [Avaliações de Estágio]
 */
router.put('/:id', AvaliacaoEstagioController.update);

/**
 * @swagger
 * /avaliacoes/{id}:
 *   delete:
 *     summary: Exclui uma avaliação
 *     tags: [Avaliações de Estágio]
 */
router.delete('/:id', AvaliacaoEstagioController.delete);

module.exports = router;
