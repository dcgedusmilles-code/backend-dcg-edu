const express = require('express');
const router = express.Router();
const instrutorController = require('../../controllers/training_coordinators/instructors_controller');

/**
 * @swagger
 * tags:
 *   name: Instrutores
 *   description: Gestão dos instrutores
 */

/**
 * @swagger
 * /api/instrutores:
 *   get:
 *     summary: Lista todos os instrutores
 *     tags: [Instrutores]
 *     responses:
 *       200:
 *         description: Lista de instrutores
 */
router.get('/', instrutorController.listar);

/**
 * @swagger
 * /api/instrutores/{id}:
 *   get:
 *     summary: Obtém um instrutor pelo ID
 *     tags: [Instrutores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Instrutor encontrado
 *       404:
 *         description: Instrutor não encontrado
 */
router.get('/:id', instrutorController.obter);

/**
 * @swagger
 * /api/instrutores:
 *   post:
 *     summary: Cria um novo instrutor
 *     tags: [Instrutores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               especialidade:
 *                 type: string
 *               curriculo:
 *                 type: string
 *               departamento_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Instrutor criado com sucesso
 */
router.post('/', instrutorController.criar);

/**
 * @swagger
 * /api/instrutores/{id}:
 *   put:
 *     summary: Atualiza um instrutor
 *     tags: [Instrutores]
 */
router.put('/:id', instrutorController.atualizar);

/**
 * @swagger
 * /api/instrutores/{id}:
 *   delete:
 *     summary: Exclui um instrutor
 *     tags: [Instrutores]
 */
router.delete('/:id', instrutorController.excluir);

module.exports = router;
