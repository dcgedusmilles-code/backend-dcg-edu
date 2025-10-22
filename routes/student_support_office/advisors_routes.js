const express = require('express');
const router = express.Router();
const controller = require('../../controllers/student_support_office/advisors_controller');

/**
 * @swagger
 * tags:
 *   name: Orientadores
 *   description: Gestão de orientadores
 */

/**
 * @swagger
 * /orientadores:
 *   get:
 *     summary: Lista todos os orientadores
 *     tags: [Orientadores]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /orientadores/{id}:
 *   get:
 *     summary: Busca um orientador pelo ID
 *     tags: [Orientadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 */
router.get('/:id', controller.buscar);

/**
 * @swagger
 * /orientadores:
 *   post:
 *     summary: Cria um novo orientador
 *     tags: [Orientadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               especialidade:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email:
 *                 type: string
 *               disponibilidade:
 *                 type: string
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /orientadores/{id}:
 *   put:
 *     summary: Atualiza os dados de um orientador
 *     tags: [Orientadores]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /orientadores/{id}:
 *   delete:
 *     summary: Remove um orientador
 *     tags: [Orientadores]
 */
router.delete('/:id', controller.excluir);

module.exports = router;
