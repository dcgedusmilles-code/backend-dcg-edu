const express = require('express');
const router = express.Router();
const controller = require('../../controllers/secretaria_academica/appointment_scheduling_controller');

/**
 * @swagger
 * tags:
 *   name: AgendamentoAtendimento
 *   description: Gestão de agendamentos de atendimento
 */

/**
 * @swagger
 * /api/agendamentos:
 *   get:
 *     summary: Lista todos os agendamentos
 *     tags: [AgendamentoAtendimento]
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/agendamentos/{id}:
 *   get:
 *     summary: Busca um agendamento por ID
 *     tags: [AgendamentoAtendimento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Agendamento encontrado
 */
router.get('/:id', controller.buscar);

/**
 * @swagger
 * /api/agendamentos:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [AgendamentoAtendimento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               aluno_id: { type: integer }
 *               funcionario_id: { type: integer }
 *               data: { type: string, format: date }
 *               hora: { type: string }
 *               motivo: { type: string }
 *               status: { type: string }
 *     responses:
 *       201:
 *         description: Agendamento criado
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/agendamentos/{id}:
 *   put:
 *     summary: Atualiza um agendamento
 *     tags: [AgendamentoAtendimento]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/agendamentos/{id}:
 *   delete:
 *     summary: Remove um agendamento
 *     tags: [AgendamentoAtendimento]
 */
router.delete('/:id', controller.excluir);

module.exports = router;
