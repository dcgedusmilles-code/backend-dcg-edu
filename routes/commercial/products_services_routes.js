'use strict';
const express = require('express');
const router = express.Router();
const produtoServicoController = require('../../controllers/commercial/products_services_controller');

/**
 * @swagger
 * tags:
 *   name: ProdutosServicos
 *   description: Gestão de produtos e serviços
 */

/**
 * @swagger
 * /produtos-servicos:
 *   get:
 *     summary: Listar todos os produtos/serviços
 *     tags: [ProdutosServicos]
 *     responses:
 *       200:
 *         description: Lista de produtos e serviços
 */
router.get('/', produtoServicoController.listar);

/**
 * @swagger
 * /produtos-servicos/{id}:
 *   get:
 *     summary: Buscar produto/serviço por ID
 *     tags: [ProdutosServicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do produto/serviço
 */
router.get('/:id', produtoServicoController.buscarPorId);

/**
 * @swagger
 * /produtos-servicos:
 *   post:
 *     summary: Criar novo produto/serviço
 *     tags: [ProdutosServicos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               tipo:
 *                 type: string
 *               preco_base:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produto/Serviço criado
 */
router.post('/', produtoServicoController.criar);

/**
 * @swagger
 * /produtos-servicos/{id}:
 *   put:
 *     summary: Atualizar produto/serviço
 *     tags: [ProdutosServicos]
 */
router.put('/:id', produtoServicoController.atualizar);

/**
 * @swagger
 * /produtos-servicos/{id}:
 *   delete:
 *     summary: Remover produto/serviço
 *     tags: [ProdutosServicos]
 */
router.delete('/:id', produtoServicoController.remover);

module.exports = router;
