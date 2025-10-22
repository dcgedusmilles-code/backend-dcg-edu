const express = require('express');
const router = express.Router();
const controller = require('../../controllers/internship_and_professional_integration_office/internship_reports_controller');

/**
 * @swagger
 * tags:
 *   name: RelatorioEstagio
 *   description: Gestão de relatórios de estágio
 */

/**
 * @swagger
 * /api/relatorios:
 *   get:
 *     summary: Lista todos os relatórios
 *     tags: [RelatorioEstagio]
 *     responses:
 *       200:
 *         description: Lista de relatórios retornada com sucesso
 */

/**
 * @swagger
 * /api/relatorios/{id}:
 *   get:
 *     summary: Obtém um relatório pelo ID
 *     tags: [RelatorioEstagio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do relatório
 *     responses:
 *       200:
 *         description: Relatório encontrado
 *       404:
 *         description: Relatório não encontrado
 */

/**
 * @swagger
 * /api/relatorios:
 *   post:
 *     summary: Cria um novo relatório de estágio
 *     tags: [RelatorioEstagio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_estagio:
 *                 type: integer
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               data_envio:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Relatório criado com sucesso
 */

/**
 * @swagger
 * /api/relatorios/{id}:
 *   put:
 *     summary: Atualiza um relatório existente
 *     tags: [RelatorioEstagio]
 *   delete:
 *     summary: Remove um relatório
 *     tags: [RelatorioEstagio]
 */



router.get('/relatorios', controller.list);
router.get('/relatorios/:id', controller.get);
router.post('/relatorios', controller.create);
router.put('/relatorios/:id', controller.update);
router.delete('/relatorios/:id', controller.delete);

module.exports = router;
