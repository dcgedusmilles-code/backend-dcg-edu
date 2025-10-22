'use strict';
const express = require('express');
const router = express.Router();
const funcionarioController = require('../../controllers/human_resources/employees_controller');

/**
 * @swagger
 * tags:
 *   name: Funcionarios
 *   description: Gestão dos funcionários da organização
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Funcionario:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - telefone
 *         - cargo
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do funcionário
 *           example: 1
 *         nome:
 *           type: string
 *           description: Nome completo do funcionário
 *           example: Maria de Souza
 *         email:
 *           type: string
 *           description: Endereço de e-mail corporativo
 *           example: maria.souza@empresa.com
 *         telefone:
 *           type: string
 *           description: Telefone de contato
 *           example: "+55 11 99999-8888"
 *         cargo:
 *           type: string
 *           description: Cargo ocupado pelo funcionário
 *           example: Analista de Recursos Humanos
 *         departamento:
 *           type: string
 *           description: Nome do departamento
 *           example: Recursos Humanos
 *         data_admissao:
 *           type: string
 *           format: date
 *           description: Data de admissão do funcionário
 *           example: 2023-02-10
 *         salario:
 *           type: number
 *           format: float
 *           description: Salário atual
 *           example: 4800.50
 *         status:
 *           type: string
 *           description: Status atual do funcionário
 *           enum: [Ativo, Inativo]
 *           example: Ativo
 *         criado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T08:30:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T09:45:00Z
 */

/**
 * @swagger
 * /funcionarios:
 *   get:
 *     summary: Lista todos os funcionários
 *     tags: [Funcionarios]
 *     responses:
 *       200:
 *         description: Lista de funcionários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Funcionario'
 */
router.get('/', funcionarioController.getAll);

/**
 * @swagger
 * /funcionarios/{id}:
 *   get:
 *     summary: Obtém um funcionário pelo ID
 *     tags: [Funcionarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do funcionário
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Funcionario'
 *       404:
 *         description: Funcionário não encontrado
 */
router.get('/:id', funcionarioController.getById);

/**
 * @swagger
 * /funcionarios:
 *   post:
 *     summary: Cria um novo funcionário
 *     tags: [Funcionarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Funcionario'
 *     responses:
 *       201:
 *         description: Funcionário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Funcionario'
 *       400:
 *         description: Erro de validação dos dados enviados
 */
router.post('/', funcionarioController.create);

/**
 * @swagger
 * /funcionarios/{id}:
 *   put:
 *     summary: Atualiza um funcionário existente
 *     tags: [Funcionarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do funcionário a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Funcionario'
 *     responses:
 *       200:
 *         description: Funcionário atualizado com sucesso
 *       400:
 *         description: Erro de validação dos dados
 *       404:
 *         description: Funcionário não encontrado
 */
router.put('/:id', funcionarioController.update);

/**
 * @swagger
 * /funcionarios/{id}:
 *   delete:
 *     summary: Remove um funcionário pelo ID
 *     tags: [Funcionarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do funcionário a ser removido
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Funcionário removido com sucesso
 *       404:
 *         description: Funcionário não encontrado
 */
router.delete('/:id', funcionarioController.delete);

module.exports = router;
