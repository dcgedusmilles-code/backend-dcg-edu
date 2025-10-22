'use strict';
const express = require('express');
const router = express.Router();
const RelatorioFinanceiroController = require('../../controllers/financeiro/financial_reports_controller');

/**
 * @swagger
 * tags:
 *   name: RelatoriosFinanceiros
 *   description: Gestão e monitoramento dos relatórios financeiros
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RelatorioFinanceiro:
 *       type: object
 *       required:
 *         - titulo
 *         - tipo
 *         - periodoInicio
 *         - periodoFim
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do relatório financeiro
 *           example: 1
 *         titulo:
 *           type: string
 *           description: Título do relatório
 *           example: Demonstrativo de Resultados - Setembro 2025
 *         tipo:
 *           type: string
 *           description: Tipo do relatório (balanço, fluxo de caixa, etc.)
 *           example: Balanço Patrimonial
 *         periodoInicio:
 *           type: string
 *           format: date
 *           description: Data inicial do período do relatório
 *           example: 2025-09-01
 *         periodoFim:
 *           type: string
 *           format: date
 *           description: Data final do período do relatório
 *           example: 2025-09-30
 *         totalReceitas:
 *           type: number
 *           format: float
 *           description: Total de receitas no período
 *           example: 250000.00
 *         totalDespesas:
 *           type: number
 *           format: float
 *           description: Total de despesas no período
 *           example: 180000.00
 *         lucroLiquido:
 *           type: number
 *           format: float
 *           description: Resultado líquido do período
 *           example: 70000.00
 *         criado_em:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *           example: 2025-10-17T10:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           description: Última atualização do registro
 *           example: 2025-10-17T12:00:00Z
 */

/**
 * @swagger
 * /relatorios-financeiros:
 *   get:
 *     summary: Lista todos os relatórios financeiros
 *     tags: [RelatoriosFinanceiros]
 *     responses:
 *       200:
 *         description: Lista de relatórios financeiros retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RelatorioFinanceiro'
 */
router.get('/relatorios-financeiros', RelatorioFinanceiroController.findAll);

/**
 * @swagger
 * /relatorios-financeiros/{id}:
 *   get:
 *     summary: Retorna um relatório financeiro pelo ID
 *     tags: [RelatoriosFinanceiros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do relatório financeiro
 *     responses:
 *       200:
 *         description: Relatório encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RelatorioFinanceiro'
 *       404:
 *         description: Relatório financeiro não encontrado
 */
router.get('/relatorios-financeiros/:id', RelatorioFinanceiroController.findById);

/**
 * @swagger
 * /relatorios-financeiros:
 *   post:
 *     summary: Cria um novo relatório financeiro
 *     tags: [RelatoriosFinanceiros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RelatorioFinanceiro'
 *     responses:
 *       201:
 *         description: Relatório financeiro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RelatorioFinanceiro'
 *       400:
 *         description: Erro ao criar relatório
 */
router.post('/relatorios-financeiros', RelatorioFinanceiroController.create);

/**
 * @swagger
 * /relatorios-financeiros/{id}:
 *   put:
 *     summary: Atualiza um relatório financeiro existente
 *     tags: [RelatoriosFinanceiros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do relatório financeiro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RelatorioFinanceiro'
 *     responses:
 *       200:
 *         description: Relatório atualizado com sucesso
 *       404:
 *         description: Relatório financeiro não encontrado
 *       400:
 *         description: Erro ao atualizar relatório
 */
router.put('/relatorios-financeiros/:id', RelatorioFinanceiroController.update);

/**
 * @swagger
 * /relatorios-financeiros/{id}:
 *   delete:
 *     summary: Remove um relatório financeiro
 *     tags: [RelatoriosFinanceiros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do relatório financeiro
 *     responses:
 *       204:
 *         description: Relatório removido com sucesso
 *       404:
 *         description: Relatório financeiro não encontrado
 */
router.delete('/relatorios-financeiros/:id', RelatorioFinanceiroController.delete);

module.exports = router;
