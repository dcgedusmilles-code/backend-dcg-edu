const express = require('express');
const router = express.Router();
const controller = require('../../controllers/commercial/commercial_reports_controller');

/**
 * @swagger
 * tags:
 *   name: RelatorioComercial
 *   description: Gestão de relatórios comerciais
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RelatorioComercial:
 *       type: object
 *       required:
 *         - titulo
 *         - periodo
 *         - autor
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do relatório
 *           example: 1
 *         titulo:
 *           type: string
 *           description: Título do relatório
 *           example: Relatório de Vendas - 3º Trimestre
 *         descricao:
 *           type: string
 *           description: Descrição detalhada do relatório
 *           example: Análise de desempenho comercial do terceiro trimestre de 2025.
 *         periodo:
 *           type: string
 *           description: Período de referência do relatório
 *           example: 2025-Q3
 *         autor:
 *           type: string
 *           description: Nome do autor responsável pelo relatório
 *           example: João Jamba
 *         total_vendas:
 *           type: number
 *           description: Valor total de vendas no período
 *           example: 1250000.50
 *         status:
 *           type: string
 *           description: Status do relatório (ex: em elaboração, finalizado, revisado)
 *           example: finalizado
 *         criado_em:
 *           type: string
 *           format: date-time
 *           description: Data de criação do relatório
 *           example: 2025-10-09T12:00:00Z
 */

/**
 * @swagger
 * /relatorios:
 *   get:
 *     summary: Lista todos os relatórios comerciais
 *     tags: [RelatorioComercial]
 *     responses:
 *       200:
 *         description: Lista de relatórios retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RelatorioComercial'
 */

/**
 * @swagger
 * /relatorios/{id}:
 *   get:
 *     summary: Obtém um relatório comercial pelo ID
 *     tags: [RelatorioComercial]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do relatório
 *     responses:
 *       200:
 *         description: Relatório encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RelatorioComercial'
 *       404:
 *         description: Relatório não encontrado
 */

/**
 * @swagger
 * /relatorios:
 *   post:
 *     summary: Cria um novo relatório comercial
 *     tags: [RelatorioComercial]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RelatorioComercial'
 *     responses:
 *       201:
 *         description: Relatório criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RelatorioComercial'
 */

/**
 * @swagger
 * /relatorios/{id}:
 *   put:
 *     summary: Atualiza um relatório comercial existente
 *     tags: [RelatorioComercial]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do relatório
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RelatorioComercial'
 *     responses:
 *       200:
 *         description: Relatório atualizado com sucesso
 *       404:
 *         description: Relatório não encontrado
 */

/**
 * @swagger
 * /relatorios/{id}:
 *   delete:
 *     summary: Exclui um relatório comercial
 *     tags: [RelatorioComercial]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do relatório
 *     responses:
 *       200:
 *         description: Relatório excluído com sucesso
 *       404:
 *         description: Relatório não encontrado
 */

router.post('/relatorios', controller.criar);
router.get('/relatorios', controller.listar);
router.get('/relatorios/:id', controller.buscarPorId);
router.put('/relatorios/:id', controller.atualizar);
router.delete('/relatorios/:id', controller.remover);

module.exports = router;
