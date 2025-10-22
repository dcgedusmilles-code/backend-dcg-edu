const express = require('express');
const router = express.Router();
const controller = require('../../controllers/student_support_office/partner_institutions_controller');

/**
 * @swagger
 * tags:
 *   name: Instituições Parceiras
 *   description: Gestão de instituições parceiras
 */

/**
 * @swagger
 * /api/instituicoes-parceiras:
 *   get:
 *     summary: Lista todas as instituições parceiras
 *     tags: [Instituições Parceiras]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/instituicoes-parceiras/{id}:
 *   get:
 *     summary: Obtém uma instituição parceira pelo ID
 *     tags: [Instituições Parceiras]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da instituição
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /api/instituicoes-parceiras:
 *   post:
 *     summary: Cria uma nova instituição parceira
 *     tags: [Instituições Parceiras]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome: { type: string }
 *               tipo: { type: string }
 *               contato: { type: string }
 *               email: { type: string }
 *               telefone: { type: string }
 *               area_colaboracao: { type: string }
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/instituicoes-parceiras/{id}:
 *   put:
 *     summary: Atualiza uma instituição parceira existente
 *     tags: [Instituições Parceiras]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/instituicoes-parceiras/{id}:
 *   delete:
 *     summary: Remove uma instituição parceira
 *     tags: [Instituições Parceiras]
 */
router.delete('/:id', controller.excluir);

module.exports = router;
