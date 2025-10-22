const express = require('express');
const router = express.Router();
const FornecedorController = require('../../controllers/financeiro/suppliers_controller');

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
 */
router.get('/', FornecedorController.findAll);

/**
 * @swagger
 * /fornecedores/{id}:
 *   get:
 *     summary: Busca um fornecedor pelo ID
 *     tags: [Fornecedores]
 */
router.get('/:id', FornecedorController.findById);

/**
 * @swagger
 * /fornecedores:
 *   post:
 *     summary: Cria um novo fornecedor
 *     tags: [Fornecedores]
 */
router.post('/', FornecedorController.create);

/**
 * @swagger
 * /fornecedores/{id}:
 *   put:
 *     summary: Atualiza um fornecedor existente
 *     tags: [Fornecedores]
 */
router.put('/:id', FornecedorController.update);

/**
 * @swagger
 * /fornecedores/{id}:
 *   delete:
 *     summary: Remove um fornecedor
 *     tags: [Fornecedores]
 */
router.delete('/:id', FornecedorController.delete);

module.exports = router;
