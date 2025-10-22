'use strict';
const express = require('express');
const router = express.Router();
const treinamentoController = require('../../controllers/human_resources/trainings_controller');

/**
 * @swagger
 * tags:
 *   name: Treinamentos
 *   description: Gestão dos treinamentos oferecidos aos colaboradores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Treinamento:
 *       type: object
 *       required:
 *         - titulo
 *         - descricao
 *         - carga_horaria
 *         - data_inicio
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do treinamento
 *           example: 1
 *         titulo:
 *           type: string
 *           description: Título do treinamento
 *           example: Treinamento de Comunicação Eficaz
 *         descricao:
 *           type: string
 *           description: Breve descrição do treinamento
 *           example: Curso voltado para aprimorar habilidades de comunicação interpessoal
 *         carga_horaria:
 *           type: integer
 *           description: Carga horária total do treinamento (em horas)
 *           example: 16
 *         data_inicio:
 *           type: string
 *           format: date
 *           description: Data de início do treinamento
 *           example: 2025-05-10
 *         data_fim:
 *           type: string
 *           format: date
 *           description: Data de término do treinamento
 *           example: 2025-05-12
 *         responsavel:
 *           type: string
 *           description: Nome do responsável pelo treinamento
 *           example: João Silva
 *         status:
 *           type: string
 *           enum: [Agendado, Em andamento, Concluído, Cancelado]
 *           example: Agendado
 *         criado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-03-01T10:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T14:30:00Z
 */

/**
 * @swagger
 * /treinamentos:
 *   get:
 *     summary: Lista todos os treinamentos
 *     tags: [Treinamentos]
 *     responses:
 *       200:
 *         description: Lista de treinamentos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Treinamento'
 */
router.get('/', treinamentoController.listar);

/**
 * @swagger
 * /treinamentos/{id}:
 *   get:
 *     summary: Obtém um treinamento pelo ID
 *     tags: [Treinamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do treinamento
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Treinamento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Treinamento'
 *       404:
 *         description: Treinamento não encontrado
 */
router.get('/:id', treinamentoController.buscar);

/**
 * @swagger
 * /treinamentos:
 *   post:
 *     summary: Cria um novo treinamento
 *     tags: [Treinamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Treinamento'
 *     responses:
 *       201:
 *         description: Treinamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Treinamento'
 *       400:
 *         description: Erro nos dados enviados
 */
router.post('/', treinamentoController.criar);

/**
 * @swagger
 * /treinamentos/{id}:
 *   put:
 *     summary: Atualiza um treinamento existente
 *     tags: [Treinamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do treinamento
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Treinamento'
 *     responses:
 *       200:
 *         description: Treinamento atualizado com sucesso
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Treinamento não encontrado
 */
router.put('/:id', treinamentoController.atualizar);

/**
 * @swagger
 * /treinamentos/{id}:
 *   delete:
 *     summary: Remove um treinamento
 *     tags: [Treinamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do treinamento
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Treinamento removido com sucesso
 *       404:
 *         description: Treinamento não encontrado
 */
router.delete('/:id', treinamentoController.deletar);

module.exports = router;
