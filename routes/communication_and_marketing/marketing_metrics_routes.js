'use strict';
const express = require('express');
const router = express.Router();
const metricaMarketingController = require('../../controllers/communication_and_marketing/marketing_metrics_controller');

/**
 * @swagger
 * tags:
 *   name: Métricas de Marketing
 *   description: Gerenciamento das métricas de campanhas
 */

/**
 * @swagger
 * /api/marketing-metrics:
 *   post:
 *     summary: Criar uma nova métrica de marketing
 *     tags: [Métricas de Marketing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_campanha:
 *                 type: integer
 *               alcance:
 *                 type: integer
 *               interacoes:
 *                 type: integer
 *               conversoes:
 *                 type: integer
 *               ROI:
 *                 type: number
 *                 format: float
 *               periodo_avaliado:
 *                 type: string
 *     responses:
 *       201:
 *         description: Métrica criada com sucesso
 *       400:
 *         description: Erro de validação
 */
router.post('/', metricaMarketingController.create);

/**
 * @swagger
 * /api/marketing-metrics:
 *   get:
 *     summary: Listar todas as métricas de marketing
 *     tags: [Métricas de Marketing]
 *     responses:
 *       200:
 *         description: Lista de métricas retornada com sucesso
 */
router.get('/', metricaMarketingController.getAll);

/**
 * @swagger
 * /api/marketing-metrics/{id}:
 *   get:
 *     summary: Buscar uma métrica de marketing pelo ID
 *     tags: [Métricas de Marketing]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da métrica
 *     responses:
 *       200:
 *         description: Métrica encontrada
 *       404:
 *         description: Métrica não encontrada
 */
router.get('/:id', metricaMarketingController.getById);

/**
 * @swagger
 * /api/marketing-metrics/{id}:
 *   put:
 *     summary: Atualizar uma métrica de marketing pelo ID
 *     tags: [Métricas de Marketing]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da métrica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               alcance:
 *                 type: integer
 *               interacoes:
 *                 type: integer
 *               conversoes:
 *                 type: integer
 *               ROI:
 *                 type: number
 *                 format: float
 *               periodo_avaliado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Métrica atualizada com sucesso
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Métrica não encontrada
 */
router.put('/:id', metricaMarketingController.update);

/**
 * @swagger
 * /api/marketing-metrics/{id}:
 *   delete:
 *     summary: Excluir uma métrica de marketing pelo ID
 *     tags: [Métricas de Marketing]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da métrica
 *     responses:
 *       200:
 *         description: Métrica deletada com sucesso
 *       404:
 *         description: Métrica não encontrada
 */
router.delete('/:id', metricaMarketingController.delete);

module.exports = router;
