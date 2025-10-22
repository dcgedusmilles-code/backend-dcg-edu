const express = require('express');
const router = express.Router();
const controller = require('../../controllers/student_support_office/complaints_suggestions_controller');

/**
 * @swagger
 * tags:
 *   name: Reclamações e Sugestões
 *   description: API para gerenciar reclamações e sugestões dos estudantes
 */

/**
 * @swagger
 * /api/reclamacoes:
 *   get:
 *     summary: Lista todas as reclamações/sugestões
 *     tags: [Reclamações e Sugestões]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/reclamacoes/{id}:
 *   get:
 *     summary: Retorna uma reclamação/sugestão específica
 *     tags: [Reclamações e Sugestões]
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /api/reclamacoes:
 *   post:
 *     summary: Cria uma nova reclamação/sugestão
 *     tags: [Reclamações e Sugestões]
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/reclamacoes/{id}:
 *   put:
 *     summary: Atualiza uma reclamação/sugestão existente
 *     tags: [Reclamações e Sugestões]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/reclamacoes/{id}:
 *   delete:
 *     summary: Remove uma reclamação/sugestão
 *     tags: [Reclamações e Sugestões]
 */
router.delete('/:id', controller.excluir);

module.exports = router;
