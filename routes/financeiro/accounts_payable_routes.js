'use strict';
const express = require('express');
const router = express.Router();
const contaPagarController = require('../../controllers/financeiro/accounts_payable_controller');

/**
 * @swagger
 * tags:
 *   name: Contas a Pagar
 *   description: Gestão de contas a pagar
 */

/**
 * @swagger
 * /api/contas-pagar:
 *   post:
 *     summary: Criar uma conta a pagar
 *     tags: [Contas a Pagar]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fornecedor_id:
 *                 type: integer
 *               descricao:
 *                 type: string
 *               valor:
 *                 type: number
 *                 format: float
 *               data_vencimento:
 *                 type: string
 *                 format: date
 *               data_pagamento:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Conta criada
 */
router.post('/', contaPagarController.create);

/**
 * @swagger
 * /api/contas-pagar:
 *   get:
 *     summary: Listar todas as contas a pagar
 *     tags: [Contas a Pagar]
 *     responses:
 *       200:
 *         description: Lista retornada
 */
router.get('/', contaPagarController.getAll);

/**
 * @swagger
 * /api/contas-pagar/{id}:
 *   get:
 *     summary: Buscar conta a pagar por ID
 *     tags: [Contas a Pagar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Conta encontrada
 *       404:
 *         description: Não encontrada
 */
router.get('/:id', contaPagarController.getById);

/**
 * @swagger
 * /api/contas-pagar/{id}:
 *   put:
 *     summary: Atualizar conta a pagar
 *     tags: [Contas a Pagar]
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
 *             type: object
 *     responses:
 *       200:
 *         description: Atualizada
 *       404:
 *         description: Não encontrada
 */
router.put('/:id', contaPagarController.update);

/**
 * @swagger
 * /api/contas-pagar/{id}:
 *   delete:
 *     summary: Remover conta a pagar
 *     tags: [Contas a Pagar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Removida
 *       404:
 *         description: Não encontrada
 */
router.delete('/:id', contaPagarController.delete);

module.exports = router;
