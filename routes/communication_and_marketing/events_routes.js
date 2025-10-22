'use strict';
const express = require('express');
const router = express.Router();
const eventoController = require('../../controllers/communication_and_marketing/events_controller');

/**
 * @swagger
 * tags:
 *   name: Eventos
 *   description: Gerenciamento de eventos institucionais e de marketing
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Evento:
 *       type: object
 *       required:
 *         - titulo
 *         - data_inicio
 *         - local
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do evento
 *           example: 1
 *         titulo:
 *           type: string
 *           description: Nome ou título do evento
 *           example: Semana Acadêmica 2025
 *         descricao:
 *           type: string
 *           description: Descrição detalhada do evento
 *           example: Evento anual com palestras e workshops para alunos e professores.
 *         data_inicio:
 *           type: string
 *           format: date-time
 *           description: Data e hora de início do evento
 *           example: 2025-10-20T08:00:00Z
 *         data_fim:
 *           type: string
 *           format: date-time
 *           description: Data e hora de término do evento
 *           example: 2025-10-22T18:00:00Z
 *         local:
 *           type: string
 *           description: Local onde o evento será realizado
 *           example: Auditório Central
 *         responsavel:
 *           type: string
 *           description: Nome do responsável pelo evento
 *           example: Maria Souza
 *         status:
 *           type: string
 *           description: Status atual do evento (planejado, em andamento, concluído)
 *           example: planejado
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *           example: 2025-10-10T12:00:00Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *           example: 2025-10-15T15:30:00Z
 */

/**
 * @swagger
 * /eventos:
 *   get:
 *     summary: Lista todos os eventos cadastrados
 *     tags: [Eventos]
 *     responses:
 *       200:
 *         description: Lista de eventos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Evento'
 */

/**
 * @swagger
 * /eventos/{id}:
 *   get:
 *     summary: Obtém detalhes de um evento pelo ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do evento a ser buscado
 *     responses:
 *       200:
 *         description: Evento encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evento'
 *       404:
 *         description: Evento não encontrado
 */

/**
 * @swagger
 * /eventos:
 *   post:
 *     summary: Cria um novo evento
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Evento'
 *     responses:
 *       201:
 *         description: Evento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evento'
 *       400:
 *         description: Erro de validação ao criar o evento
 */

/**
 * @swagger
 * /eventos/{id}:
 *   put:
 *     summary: Atualiza as informações de um evento existente
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do evento a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Evento'
 *     responses:
 *       200:
 *         description: Evento atualizado com sucesso
 *       400:
 *         description: Erro de validação ao atualizar
 *       404:
 *         description: Evento não encontrado
 */

/**
 * @swagger
 * /eventos/{id}:
 *   delete:
 *     summary: Remove um evento pelo ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do evento a ser removido
 *     responses:
 *       204:
 *         description: Evento removido com sucesso
 *       404:
 *         description: Evento não encontrado
 */

router.post('/eventos', eventoController.create);
router.get('/eventos', eventoController.getAll);
router.get('/eventos/:id', eventoController.getById);
router.put('/eventos/:id', eventoController.update);
router.delete('/eventos/:id', eventoController.delete);

module.exports = router;
