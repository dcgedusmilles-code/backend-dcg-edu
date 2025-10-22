const express = require('express');
const router = express.Router();
const movimentacaoEstoqueController = require('../../controllers/infrastructure_and_logistics/stock_movements_controller');

/**
 * @swagger
 * tags:
 *   name: Movimentação de Estoque
 *   description: Gestão de movimentações (entrada e saída) de itens do estoque
 */

/**
 * @swagger
 * /movimentacoes:
 *   get:
 *     summary: Lista todas as movimentações
 *     tags: [Movimentação de Estoque]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', movimentacaoEstoqueController.list);

/**
 * @swagger
 * /movimentacoes/{id}:
 *   get:
 *     summary: Busca uma movimentação pelo ID
 *     tags: [Movimentação de Estoque]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da movimentação
 *     responses:
 *       200:
 *         description: Movimentação encontrada
 */
router.get('/:id', movimentacaoEstoqueController.getById);

/**
 * @swagger
 * /movimentacoes:
 *   post:
 *     summary: Cria uma nova movimentação
 *     tags: [Movimentação de Estoque]
 */
router.post('/', movimentacaoEstoqueController.create);

/**
 * @swagger
 * /movimentacoes/{id}:
 *   put:
 *     summary: Atualiza uma movimentação existente
 *     tags: [Movimentação de Estoque]
 */
router.put('/:id', movimentacaoEstoqueController.update);

/**
 * @swagger
 * /movimentacoes/{id}:
 *   delete:
 *     summary: Remove uma movimentação do estoque
 *     tags: [Movimentação de Estoque]
 */
router.delete('/:id', movimentacaoEstoqueController.delete);

module.exports = router;
