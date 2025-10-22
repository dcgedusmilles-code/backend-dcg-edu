'use strict';
const express = require('express');
const router = express.Router();
const caixaMovimentoController = require('../../controllers/financeiro/cash_movements_controller');

/**
 * @swagger
 * tags:
 *   name: CaixaMovimento
 *   description: Gerenciamento de movimentações do caixa
 */

/**
 * @swagger
 * /caixa-movimentos:
 *   post:
 *     summary: Criar uma nova movimentação
 *     tags: [CaixaMovimento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CaixaMovimento'
 *     responses:
 *       201:
 *         description: Movimentação criada com sucesso
 */
router.post('/', caixaMovimentoController.create);

/**
 * @swagger
 * /caixa-movimentos:
 *   get:
 *     summary: Listar todas as movimentações
 *     tags: [CaixaMovimento]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', caixaMovimentoController.getAll);

/**
 * @swagger
 * /caixa-movimentos/{id}:
 *   get:
 *     summary: Buscar movimentação por ID
 *     tags: [CaixaMovimento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Movimentação encontrada
 *       404:
 *         description: Não encontrada
 */
router.get('/:id', caixaMovimentoController.getById);

/**
 * @swagger
 * /caixa-movimentos/{id}:
 *   put:
 *     summary: Atualizar uma movimentação
 *     tags: [CaixaMovimento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CaixaMovimento'
 *     responses:
 *       200:
 *         description: Movimentação atualizada
 *       404:
 *         description: Não encontrada
 */
router.put('/:id', caixaMovimentoController.update);

/**
 * @swagger
 * /caixa-movimentos/{id}:
 *   delete:
 *     summary: Remover uma movimentação
 *     tags: [CaixaMovimento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Movimentação removida
 *       404:
 *         description: Não encontrada
 */
router.delete('/:id', caixaMovimentoController.delete);

module.exports = router;
