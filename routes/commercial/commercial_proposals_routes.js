const express = require('express');
const router = express.Router();
const controller = require('../../controllers/commercial/commercial_proposals_controller');

/**
 * @swagger
 * tags:
 *   name: PropostaComercial
 *   description: Gestão de propostas comerciais
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PropostaComercial:
 *       type: object
 *       required:
 *         - titulo
 *         - cliente
 *         - valor
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da proposta
 *           example: 1
 *         titulo:
 *           type: string
 *           description: Título da proposta
 *           example: Desenvolvimento de site institucional
 *         cliente:
 *           type: string
 *           description: Nome do cliente
 *           example: Empresa XPTO
 *         descricao:
 *           type: string
 *           description: Descrição detalhada da proposta
 *           example: Proposta para desenvolvimento completo de um site responsivo.
 *         valor:
 *           type: number
 *           description: Valor total da proposta
 *           example: 250000
 *         status:
 *           type: string
 *           description: Status atual da proposta (ex: pendente, aceita, recusada)
 *           example: pendente
 *         data_envio:
 *           type: string
 *           format: date
 *           description: Data de envio da proposta
 *           example: 2025-10-09
 */

/**
 * @swagger
 * /propostas:
 *   get:
 *     summary: Lista todas as propostas comerciais
 *     tags: [PropostaComercial]
 *     responses:
 *       200:
 *         description: Lista de propostas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PropostaComercial'
 */

/**
 * @swagger
 * /propostas/{id}:
 *   get:
 *     summary: Obtém uma proposta comercial pelo ID
 *     tags: [PropostaComercial]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da proposta
 *     responses:
 *       200:
 *         description: Proposta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PropostaComercial'
 *       404:
 *         description: Proposta não encontrada
 */

/**
 * @swagger
 * /propostas:
 *   post:
 *     summary: Cria uma nova proposta comercial
 *     tags: [PropostaComercial]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PropostaComercial'
 *     responses:
 *       201:
 *         description: Proposta criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PropostaComercial'
 */

/**
 * @swagger
 * /propostas/{id}:
 *   put:
 *     summary: Atualiza uma proposta comercial existente
 *     tags: [PropostaComercial]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da proposta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PropostaComercial'
 *     responses:
 *       200:
 *         description: Proposta atualizada com sucesso
 *       404:
 *         description: Proposta não encontrada
 */

/**
 * @swagger
 * /propostas/{id}:
 *   delete:
 *     summary: Exclui uma proposta comercial
 *     tags: [PropostaComercial]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da proposta
 *     responses:
 *       200:
 *         description: Proposta excluída com sucesso
 *       404:
 *         description: Proposta não encontrada
 */

router.post('/propostas', controller.criar);
router.get('/propostas', controller.listar);
router.get('/propostas/:id', controller.buscarPorId);
router.put('/propostas/:id', controller.atualizar);
router.delete('/propostas/:id', controller.remover);

module.exports = router;
