'use strict';
const express = require('express');
const router = express.Router();
const InadimplenciaController = require('../../controllers/financeiro/default_report_controller');

/**
 * @swagger
 * tags:
 *   name: Inadimplencias
 *   description: Gestão de inadimplências financeiras e relatórios de débitos pendentes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Inadimplencia:
 *       type: object
 *       required:
 *         - clienteId
 *         - valor
 *         - dataVencimento
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da inadimplência
 *           example: 1
 *         clienteId:
 *           type: integer
 *           description: ID do cliente devedor
 *           example: 101
 *         valor:
 *           type: number
 *           description: Valor total em atraso
 *           example: 1250.75
 *         dataVencimento:
 *           type: string
 *           format: date
 *           description: Data de vencimento original da dívida
 *           example: 2025-09-15
 *         status:
 *           type: string
 *           description: Situação da inadimplência (em aberto, negociada, quitada)
 *           example: em aberto
 *         criado_em:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *           example: 2025-10-17T12:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *           example: 2025-10-18T08:30:00Z
 */

/**
 * @swagger
 * /inadimplencias:
 *   get:
 *     summary: Lista todas as inadimplências
 *     tags: [Inadimplencias]
 *     responses:
 *       200:
 *         description: Lista de inadimplências retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inadimplencia'
 */

/**
 * @swagger
 * /inadimplencias/{id}:
 *   get:
 *     summary: Obtém uma inadimplência pelo ID
 *     tags: [Inadimplencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da inadimplência
 *     responses:
 *       200:
 *         description: Inadimplência encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inadimplencia'
 *       404:
 *         description: Inadimplência não encontrada
 */

/**
 * @swagger
 * /inadimplencias:
 *   post:
 *     summary: Cria uma nova inadimplência
 *     tags: [Inadimplencias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inadimplencia'
 *     responses:
 *       201:
 *         description: Inadimplência criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inadimplencia'
 *       400:
 *         description: Erro ao criar inadimplência
 */

/**
 * @swagger
 * /inadimplencias/{id}:
 *   put:
 *     summary: Atualiza uma inadimplência existente
 *     tags: [Inadimplencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da inadimplência
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inadimplencia'
 *     responses:
 *       200:
 *         description: Inadimplência atualizada com sucesso
 *       404:
 *         description: Inadimplência não encontrada
 *       400:
 *         description: Erro ao atualizar inadimplência
 */

/**
 * @swagger
 * /inadimplencias/{id}:
 *   delete:
 *     summary: Exclui uma inadimplência
 *     tags: [Inadimplencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da inadimplência
 *     responses:
 *       200:
 *         description: Inadimplência removida com sucesso
 *       404:
 *         description: Inadimplência não encontrada
 */

router.post('/inadimplencias', InadimplenciaController.create);
router.get('/inadimplencias', InadimplenciaController.findAll);
router.get('/inadimplencias/:id', InadimplenciaController.findById);
router.put('/inadimplencias/:id', InadimplenciaController.update);
router.delete('/inadimplencias/:id', InadimplenciaController.delete);

module.exports = router;
