'use strict';
const express = require('express');
const router = express.Router();
const vendaController = require('../../controllers/commercial/sales_controller');

/**
 * @swagger
 * tags:
 *   name: Vendas
 *   description: Gestão de vendas
 */

/**
 * @swagger
 * /vendas:
 *   get:
 *     summary: Listar todas as vendas
 *     tags: [Vendas]
 *     responses:
 *       200:
 *         description: Lista de vendas
 */
router.get('/all', vendaController.findAll);

/**
 * @swagger
 * /vendas/{id}:
 *   get:
 *     summary: Buscar venda por ID
 *     tags: [Vendas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados da venda
 */
router.get('/getById/:id', vendaController.findById);

/**
 * @swagger
 * /vendas:
 *   post:
 *     summary: Criar nova venda
 *     tags: [Vendas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_cliente:
 *                 type: integer
 *               id_produto:
 *                 type: integer
 *               id_contrato:
 *                 type: integer
 *               quantidade:
 *                 type: integer
 *               valor_unitario:
 *                 type: number
 *               valor_total:
 *                 type: number
 *               data_venda:
 *                 type: string
 *                 format: date-time
 *               forma_pagamento:
 *                 type: string
 *     responses:
 *       201:
 *         description: Venda criada
 */
router.post('/create', vendaController.create);

/**
 * @swagger
 * /vendas/{id}:
 *   put:
 *     summary: Atualizar venda
 *     tags: [Vendas]
 */
router.put('/update/:id', vendaController.update);

/**
 * @swagger
 * /vendas/{id}:
 *   delete:
 *     summary: Remover venda
 *     tags: [Vendas]
 */
router.delete('/delete/:id', vendaController.delete);

module.exports = router;
