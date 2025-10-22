const express = require('express');
const router = express.Router();
const estoqueLogisticoController = require('../../controllers/infrastructure_and_logistics/stock_logistics_controller');

/**
 * @swagger
 * tags:
 *   name: Estoque Logístico
 *   description: Gestão de Itens de Estoque
 */

/**
 * @swagger
 * /estoque-logistico:
 *   get:
 *     summary: Lista todos os itens de estoque
 *     tags: [Estoque Logístico]
 *     responses:
 *       200:
 *         description: Lista de itens retornada com sucesso
 */
router.get('/', estoqueLogisticoController.list);

/**
 * @swagger
 * /estoque-logistico/{id}:
 *   get:
 *     summary: Busca um item de estoque pelo ID
 *     tags: [Estoque Logístico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do item
 *     responses:
 *       200:
 *         description: Item encontrado
 */
router.get('/:id', estoqueLogisticoController.getById);

/**
 * @swagger
 * /estoque-logistico:
 *   post:
 *     summary: Cria um novo item de estoque
 *     tags: [Estoque Logístico]
 */
router.post('/', estoqueLogisticoController.create);

/**
 * @swagger
 * /estoque-logistico/{id}:
 *   put:
 *     summary: Atualiza um item de estoque
 *     tags: [Estoque Logístico]
 */
router.put('/:id', estoqueLogisticoController.update);

/**
 * @swagger
 * /estoque-logistico/{id}:
 *   delete:
 *     summary: Remove um item de estoque
 *     tags: [Estoque Logístico]
 */
router.delete('/:id', estoqueLogisticoController.delete);

module.exports = router;
