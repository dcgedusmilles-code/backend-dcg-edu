'use strict';
const express = require('express');
const router = express.Router();
const SalarioFuncionarioController = require('../../controllers/financeiro/employee_salaries_controller');

/**
 * @swagger
 * tags:
 *   name: SalariosFuncionarios
 *   description: Gestão de salários dos funcionários e histórico de pagamentos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SalarioFuncionario:
 *       type: object
 *       required:
 *         - funcionarioId
 *         - valor
 *         - mesReferencia
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do registro de salário
 *           example: 1
 *         funcionarioId:
 *           type: integer
 *           description: ID do funcionário
 *           example: 23
 *         valor:
 *           type: number
 *           format: float
 *           description: Valor do salário do funcionário
 *           example: 4500.75
 *         mesReferencia:
 *           type: string
 *           description: Mês e ano de referência do salário (AAAA-MM)
 *           example: 2025-09
 *         dataPagamento:
 *           type: string
 *           format: date
 *           description: Data em que o salário foi pago
 *           example: 2025-10-05
 *         status:
 *           type: string
 *           description: Situação do pagamento (pendente, pago, adiantado)
 *           example: pago
 *         criado_em:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *           example: 2025-10-17T12:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           description: Última data de atualização
 *           example: 2025-10-17T15:00:00Z
 */

/**
 * @swagger
 * /salarios:
 *   get:
 *     summary: Lista todos os salários dos funcionários
 *     tags: [SalariosFuncionarios]
 *     responses:
 *       200:
 *         description: Lista de salários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SalarioFuncionario'
 */
router.get('/salarios', SalarioFuncionarioController.findAll);

/**
 * @swagger
 * /salarios/{id}:
 *   get:
 *     summary: Obtém um salário de funcionário pelo ID
 *     tags: [SalariosFuncionarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do salário
 *     responses:
 *       200:
 *         description: Salário encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SalarioFuncionario'
 *       404:
 *         description: Salário não encontrado
 */
router.get('/salarios/:id', SalarioFuncionarioController.findById);

/**
 * @swagger
 * /salarios:
 *   post:
 *     summary: Cria um novo registro de salário de funcionário
 *     tags: [SalariosFuncionarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalarioFuncionario'
 *     responses:
 *       201:
 *         description: Salário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SalarioFuncionario'
 *       400:
 *         description: Erro ao criar salário
 */
router.post('/salarios', SalarioFuncionarioController.create);

/**
 * @swagger
 * /salarios/{id}:
 *   put:
 *     summary: Atualiza um registro de salário existente
 *     tags: [SalariosFuncionarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do salário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalarioFuncionario'
 *     responses:
 *       200:
 *         description: Salário atualizado com sucesso
 *       404:
 *         description: Salário não encontrado
 *       400:
 *         description: Erro ao atualizar salário
 */
router.put('/salarios/:id', SalarioFuncionarioController.update);

/**
 * @swagger
 * /salarios/{id}:
 *   delete:
 *     summary: Exclui um registro de salário
 *     tags: [SalariosFuncionarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do salário
 *     responses:
 *       204:
 *         description: Salário removido com sucesso
 *       404:
 *         description: Salário não encontrado
 */
router.delete('/salarios/:id', SalarioFuncionarioController.delete);

module.exports = router;
