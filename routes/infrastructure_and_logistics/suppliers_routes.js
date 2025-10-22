const express = require('express');
const router = express.Router();
const FornecedorController = require('../../controllers/infrastructure_and_logistics/suppliers_controller');

/**
 * @swagger
 * tags:
 *   name: Fornecedores
 *   description: Gestão de fornecedores
 */

/**
 * @swagger
 * /fornecedores:
 *   get:
 *     summary: Lista todos os fornecedores
 *     tags: [Fornecedores]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', FornecedorController.listar);

/**
 * @swagger
 * /fornecedores/{id}:
 *   get:
 *     summary: Retorna um fornecedor pelo ID
 *     tags: [Fornecedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fornecedor encontrado
 */
router.get('/:id', FornecedorController.obterPorId);

/**
 * @swagger
 * /fornecedores:
 *   post:
 *     summary: Cria um novo fornecedor
 *     tags: [Fornecedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               tipo:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email:
 *                 type: string
 *               endereco:
 *                 type: string
 *               observacoes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/', FornecedorController.criar);

/**
 * @swagger
 * /fornecedores/{id}:
 *   put:
 *     summary: Atualiza um fornecedor existente
 *     tags: [Fornecedores]
 */
router.put('/:id', FornecedorController.atualizar);

/**
 * @swagger
 * /fornecedores/{id}:
 *   delete:
 *     summary: Remove um fornecedor
 *     tags: [Fornecedores]
 */
router.delete('/:id', FornecedorController.remover);

module.exports = router;
