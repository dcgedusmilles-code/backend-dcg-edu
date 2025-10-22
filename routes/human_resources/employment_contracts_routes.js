'use strict';
const express = require('express');
const router = express.Router();
const contratoTrabalhoController = require('../../controllers/human_resources/employment_contracts_controller');

/**
 * @swagger
 * tags:
 *   name: ContratosTrabalho
 *   description: Gestão dos contratos de trabalho dos funcionários
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ContratoTrabalho:
 *       type: object
 *       required:
 *         - funcionario_id
 *         - data_inicio
 *         - tipo_contrato
 *         - salario_base
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do contrato de trabalho
 *           example: 12
 *         funcionario_id:
 *           type: integer
 *           description: ID do funcionário vinculado
 *           example: 4
 *         tipo_contrato:
 *           type: string
 *           description: Tipo de contrato (ex: CLT, Estágio, Temporário)
 *           example: CLT
 *         data_inicio:
 *           type: string
 *           format: date
 *           description: Data de início do contrato
 *           example: 2023-03-01
 *         data_fim:
 *           type: string
 *           format: date
 *           description: Data de término do contrato (se aplicável)
 *           example: 2025-03-01
 *         salario_base:
 *           type: number
 *           format: float
 *           description: Salário base definido no contrato
 *           example: 5500.00
 *         carga_horaria:
 *           type: string
 *           description: Carga horária semanal
 *           example: "40 horas"
 *         status:
 *           type: string
 *           enum: [Ativo, Encerrado]
 *           description: Status atual do contrato
 *           example: Ativo
 *         criado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T08:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T09:15:00Z
 */

/**
 * @swagger
 * /contratos:
 *   get:
 *     summary: Lista todos os contratos de trabalho
 *     tags: [ContratosTrabalho]
 *     responses:
 *       200:
 *         description: Lista de contratos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ContratoTrabalho'
 */
router.get('/', contratoTrabalhoController.getAll);

/**
 * @swagger
 * /contratos/{id}:
 *   get:
 *     summary: Obtém um contrato de trabalho pelo ID
 *     tags: [ContratosTrabalho]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contrato
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contrato de trabalho encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContratoTrabalho'
 *       404:
 *         description: Contrato de trabalho não encontrado
 */
router.get('/:id', contratoTrabalhoController.getById);

/**
 * @swagger
 * /contratos:
 *   post:
 *     summary: Cria um novo contrato de trabalho
 *     tags: [ContratosTrabalho]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContratoTrabalho'
 *     responses:
 *       201:
 *         description: Contrato de trabalho criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContratoTrabalho'
 *       400:
 *         description: Erro de validação nos dados enviados
 */
router.post('/', contratoTrabalhoController.create);

/**
 * @swagger
 * /contratos/{id}:
 *   put:
 *     summary: Atualiza um contrato de trabalho existente
 *     tags: [ContratosTrabalho]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contrato a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContratoTrabalho'
 *     responses:
 *       200:
 *         description: Contrato de trabalho atualizado com sucesso
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Contrato de trabalho não encontrado
 */
router.put('/:id', contratoTrabalhoController.update);

/**
 * @swagger
 * /contratos/{id}:
 *   delete:
 *     summary: Remove um contrato de trabalho
 *     tags: [ContratosTrabalho]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contrato de trabalho a ser removido
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Contrato removido com sucesso
 *       404:
 *         description: Contrato de trabalho não encontrado
 */
router.delete('/:id', contratoTrabalhoController.delete);

module.exports = router;
