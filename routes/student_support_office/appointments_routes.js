const express = require('express');
const router = express.Router();
const agendamentoController = require('../../controllers/student_support_office/appointments_controller');

/**
 * @swagger
 * tags:
 *   name: Agendamentos
 *   description: Gestão de agendamentos de atendimento
 */

/**
 * @swagger
 * /agendamentos:
 *   get:
 *     summary: Retorna todos os agendamentos
 *     tags: [Agendamentos]
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 */
router.get('/', agendamentoController.getAll);

/**
 * @swagger
 * /agendamentos/{id}:
 *   get:
 *     summary: Retorna um agendamento pelo ID
 *     tags: [Agendamentos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Agendamento encontrado
 */
router.get('/:id', agendamentoController.getById);

/**
 * @swagger
 * /agendamentos:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [Agendamentos]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 */
router.post('/', agendamentoController.create);

/**
 * @swagger
 * /agendamentos/{id}:
 *   put:
 *     summary: Atualiza um agendamento
 *     tags: [Agendamentos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Agendamento atualizado
 */
router.put('/:id', agendamentoController.update);

/**
 * @swagger
 * /agendamentos/{id}:
 *   delete:
 *     summary: Remove um agendamento
 *     tags: [Agendamentos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Agendamento removido
 */
router.delete('/:id', agendamentoController.delete);

module.exports = router;
