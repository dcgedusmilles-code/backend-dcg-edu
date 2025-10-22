const express = require('express');
const router = express.Router();
const emprestimoController = require('../../controllers/library_resource_center/loans_controller');

/**
 * @swagger
 * tags:
 *   name: Emprestimos
 *   description: Gerenciamento de empréstimos da biblioteca
 */

/**
 * @swagger
 * /emprestimos:
 *   get:
 *     summary: Lista todos os empréstimos
 *     tags: [Emprestimos]
 *     responses:
 *       200:
 *         description: Lista de empréstimos
 */
router.get('/', emprestimoController.listar);

/**
 * @swagger
 * /emprestimos/{id}:
 *   get:
 *     summary: Busca um empréstimo pelo ID
 *     tags: [Emprestimos]
 */
router.get('/:id', emprestimoController.buscarPorId);

/**
 * @swagger
 * /emprestimos:
 *   post:
 *     summary: Cria um novo empréstimo
 *     tags: [Emprestimos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emprestimo'
 */
router.post('/', emprestimoController.criar);

/**
 * @swagger
 * /emprestimos/{id}:
 *   put:
 *     summary: Atualiza um empréstimo existente
 *     tags: [Emprestimos]
 */
router.put('/:id', emprestimoController.atualizar);

/**
 * @swagger
 * /emprestimos/{id}:
 *   delete:
 *     summary: Remove um empréstimo
 *     tags: [Emprestimos]
 */
router.delete('/:id', emprestimoController.deletar);

module.exports = router;
