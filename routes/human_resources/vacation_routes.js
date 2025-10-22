'use strict';
const express = require('express');
const router = express.Router();
const feriasController = require('../../controllers/human_resources/vacation_controller');

/**
 * @swagger
 * tags:
 *   name: Ferias
 *   description: Gestão de férias dos funcionários
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Ferias:
 *       type: object
 *       required:
 *         - funcionario_id
 *         - data_inicio
 *         - data_fim
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do registro de férias
 *           example: 12
 *         funcionario_id:
 *           type: integer
 *           description: ID do funcionário associado
 *           example: 101
 *         data_inicio:
 *           type: string
 *           format: date
 *           description: Data de início das férias
 *           example: 2025-08-01
 *         data_fim:
 *           type: string
 *           format: date
 *           description: Data de término das férias
 *           example: 2025-08-20
 *         status:
 *           type: string
 *           enum: [Agendada, Em andamento, Concluída, Cancelada]
 *           description: Situação atual do período de férias
 *           example: Agendada
 *         observacoes:
 *           type: string
 *           description: Observações gerais ou justificativas
 *           example: Férias divididas em dois períodos
 *         criado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-03-05T10:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T12:45:00Z
 */

/**
 * @swagger
 * /ferias:
 *   get:
 *     summary: Lista todos os registros de férias
 *     tags: [Ferias]
 *     responses:
 *       200:
 *         description: Lista de férias retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ferias'
 */
router.get('/', feriasController.listar);

/**
 * @swagger
 * /ferias/{id}:
 *   get:
 *     summary: Busca um registro de férias pelo ID
 *     tags: [Ferias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do registro de férias
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ferias'
 *       404:
 *         description: Registro não encontrado
 */
router.get('/:id', feriasController.buscar);

/**
 * @swagger
 * /ferias:
 *   post:
 *     summary: Cria um novo registro de férias
 *     tags: [Ferias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ferias'
 *     responses:
 *       201:
 *         description: Registro de férias criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ferias'
 *       400:
 *         description: Erro nos dados enviados
 */
router.post('/', feriasController.criar);

/**
 * @swagger
 * /ferias/{id}:
 *   put:
 *     summary: Atualiza um registro de férias existente
 *     tags: [Ferias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do registro de férias
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ferias'
 *     responses:
 *       200:
 *         description: Registro atualizado com sucesso
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Registro não encontrado
 */
router.put('/:id', feriasController.atualizar);

/**
 * @swagger
 * /ferias/{id}:
 *   delete:
 *     summary: Remove um registro de férias
 *     tags: [Ferias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do registro de férias
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Registro removido com sucesso
 *       404:
 *         description: Registro não encontrado
 */
router.delete('/:id', feriasController.deletar);

module.exports = router;
