const express = require('express');
const router = express.Router();
const leadController = require('../../controllers/commercial/leads_controller');

/**
 * @swagger
 * tags:
 *   name: Leads
 *   description: Gestão de leads comerciais
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Lead:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do lead
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *         telefone:
 *           type: string
 *         origem:
 *           type: string
 *         interesse:
 *           type: string
 *         status:
 *           type: string
 *         data_criacao:
 *           type: string
 *           format: date-time
 *         data_atualizacao:
 *           type: string
 *           format: date-time
 *       example:
 *         id: 1
 *         nome: João Silva
 *         email: joao@email.com
 *         telefone: "912345678"
 *         origem: "Website"
 *         interesse: "Produto X"
 *         status: "Novo"
 *         data_criacao: "2025-10-02T10:00:00Z"
 *         data_atualizacao: "2025-10-02T11:00:00Z"
 */

/**
 * @swagger
 * /leads:
 *   post:
 *     summary: Cria um novo lead
 *     tags: [Leads]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lead'
 *     responses:
 *       201:
 *         description: Lead criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lead'
 *
 *   get:
 *     summary: Lista todos os leads
 *     tags: [Leads]
 *     responses:
 *       200:
 *         description: Lista de leads
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lead'
 */

/**
 * @swagger
 * /leads/{id}:
 *   get:
 *     summary: Obtém um lead pelo ID
 *     tags: [Leads]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lead encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lead'
 *       404:
 *         description: Lead não encontrado
 *
 *   put:
 *     summary: Atualiza um lead
 *     tags: [Leads]
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
 *             $ref: '#/components/schemas/Lead'
 *     responses:
 *       200:
 *         description: Lead atualizado
 *
 *   delete:
 *     summary: Remove um lead
 *     tags: [Leads]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Lead removido
 */

    router.post('/create', leadController.criar);
    router.get('/all', leadController.listar);
    router.get('/getById/:id', leadController.buscarPorId);
    router.put('/update/:id', leadController.atualizar);
    router.delete('/delete/:id', leadController.remover);

module.exports = router;
