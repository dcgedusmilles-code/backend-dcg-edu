'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/infrastructure_and_logistics/appointments_transportation_controller');

/**
 * @swagger
 * tags:
 *   name: AgendamentosTransporte
 *   description: Gestão de agendamentos de transporte
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AgendamentoTransporte:
 *       type: object
 *       required:
 *         - id_transporte
 *         - finalidade
 *         - motorista
 *         - origem
 *         - destino
 *         - data_saida
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do agendamento
 *           example: 25
 *         id_transporte:
 *           type: integer
 *           description: ID do veículo ou transporte associado
 *           example: 12
 *         finalidade:
 *           type: string
 *           description: Finalidade da viagem
 *           example: Entrega de materiais de escritório
 *         motorista:
 *           type: integer
 *           description: ID do motorista responsável
 *           example: 8
 *         origem:
 *           type: string
 *           description: Local de partida
 *           example: Sede central
 *         destino:
 *           type: string
 *           description: Local de destino
 *           example: Filial Luanda Sul
 *         data_saida:
 *           type: string
 *           format: date
 *           description: Data e hora da saída
 *           example: 2025-11-03
 *         data_retorno:
 *           type: string
 *           format: date
 *           description: Data e hora de retorno (se aplicável)
 *           example: 2025-11-04
 *         status:
 *           type: string
 *           enum: [Agendado, Em andamento, Concluído, Cancelado]
 *           description: Estado atual do agendamento
 *           example: Agendado
 *         observacoes:
 *           type: string
 *           description: Notas ou detalhes adicionais
 *           example: Necessário abastecimento antes da saída
 *         criado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T09:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T11:30:00Z
 */

/**
 * @swagger
 * /agendamentos-transporte:
 *   get:
 *     summary: Lista todos os agendamentos de transporte
 *     tags: [AgendamentosTransporte]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AgendamentoTransporte'
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /agendamentos-transporte/{id}:
 *   get:
 *     summary: Busca um agendamento de transporte por ID
 *     tags: [AgendamentosTransporte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do agendamento
 *     responses:
 *       200:
 *         description: Registro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AgendamentoTransporte'
 *       404:
 *         description: Registro não encontrado
 */
router.get('/:id', controller.buscar);

/**
 * @swagger
 * /agendamentos-transporte:
 *   post:
 *     summary: Cria um novo agendamento de transporte
 *     tags: [AgendamentosTransporte]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AgendamentoTransporte'
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AgendamentoTransporte'
 *       400:
 *         description: Erro nos dados enviados
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /agendamentos-transporte/{id}:
 *   put:
 *     summary: Atualiza um agendamento existente
 *     tags: [AgendamentosTransporte]
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
 *             $ref: '#/components/schemas/AgendamentoTransporte'
 *     responses:
 *       200:
 *         description: Registro atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Registro não encontrado
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /agendamentos-transporte/{id}:
 *   delete:
 *     summary: Remove um agendamento de transporte
 *     tags: [AgendamentosTransporte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Registro removido com sucesso
 *       404:
 *         description: Registro não encontrado
 */
router.delete('/:id', controller.deletar);

module.exports = router;
