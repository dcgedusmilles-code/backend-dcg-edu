const express = require('express');
const router = express.Router();
const controller = require('../../controllers/pedagogico/teachers_controller');

/**
 * @swagger
 * tags:
 *   name: Professores
 *   description: Gestão de Professores
 */

/**
 * @swagger
 * /professores:
 *   get:
 *     summary: Lista todos os professores
 *     tags: [Professores]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /professores/{id}:
 *   get:
 *     summary: Obtém um professor pelo ID
 *     tags: [Professores]
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /professores:
 *   post:
 *     summary: Cria um novo professor
 *     tags: [Professores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome: { type: string }
 *               email: { type: string }
 *               telefone: { type: string }
 *               formacao: { type: string }
 *               departamento_id: { type: integer }
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /professores/{id}:
 *   put:
 *     summary: Atualiza um professor existente
 *     tags: [Professores]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /professores/{id}:
 *   delete:
 *     summary: Remove um professor
 *     tags: [Professores]
 */
router.delete('/:id', controller.deletar);

module.exports = router;
