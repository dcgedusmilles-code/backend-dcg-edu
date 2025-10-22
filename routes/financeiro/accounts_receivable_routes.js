'use strict';
const express = require('express');
const router = express.Router();
const contaReceberController = require('../../controllers/financeiro/accounts_receivable_controller');

/**
 * @swagger
 * tags:
 *   name: Contas a Receber
 *   description: Gerenciamento das contas a receber
 */

/**
 * @swagger
 * /contas-receber:
 *   post:
 *     summary: Criar uma nova conta a receber
 *     tags: [Contas a Receber]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContaReceber'
 *     responses:
 *       201:
 *         description: Conta criada com sucesso
 */
router.post('/', contaReceberController.create);

/**
 * @swagger
 * /contas-receber:
 *   get:
 *     summary: Listar todas as contas a receber
 *     tags: [Contas a Receber]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', contaReceberController.getAll);

/**
 * @swagger
 * /contas-receber/{id}:
 *   get:
 *     summary: Buscar conta por ID
 *     tags: [Contas a Receber]
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
 *         description: Conta não encontrada
 */
router.get('/:id', contaReceberController.getById);

/**
 * @swagger
 * /contas-receber/{id}:
 *   put:
 *     summary: Atualizar uma conta existente
 *     tags: [Contas a Receber]
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
 *             $ref: '#/components/schemas/ContaReceber'
 *     responses:
 *       200:
 *         description: Conta atualizada
 *       404:
 *         description: Conta não encontrada
 */
router.put('/:id', contaReceberController.update);

/**
 * @swagger
 * /contas-receber/{id}:
 *   delete:
 *     summary: Remover uma conta existente
 *     tags: [Contas a Receber]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Conta removida
 *       404:
 *         description: Conta não encontrada
 */
router.delete('/:id', contaReceberController.delete);

module.exports = router;
