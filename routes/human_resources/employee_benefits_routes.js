'use strict';
const express = require('express');
const router = express.Router();
const funcionarioBeneficioController = require('../../controllers/human_resources/employee_benefits_controller');

/**
 * @swagger
 * tags:
 *   name: FuncionarioBeneficio
 *   description: Gestão dos benefícios atribuídos a funcionários
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     FuncionarioBeneficio:
 *       type: object
 *       required:
 *         - funcionario_id
 *         - beneficio_id
 *         - data_inicio
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do vínculo entre funcionário e benefício
 *           example: 1
 *         funcionario_id:
 *           type: integer
 *           description: ID do funcionário
 *           example: 101
 *         funcionario_nome:
 *           type: string
 *           description: Nome do funcionário
 *           example: João Silva
 *         beneficio_id:
 *           type: integer
 *           description: ID do benefício atribuído
 *           example: 5
 *         beneficio_nome:
 *           type: string
 *           description: Nome do benefício
 *           example: Plano de Saúde
 *         data_inicio:
 *           type: string
 *           format: date
 *           description: Data de início do benefício
 *           example: 2025-01-10
 *         data_fim:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: Data de término (se aplicável)
 *           example: null
 *         status:
 *           type: string
 *           description: Situação atual do vínculo
 *           enum: [Ativo, Inativo]
 *           example: Ativo
 *         observacoes:
 *           type: string
 *           description: Observações adicionais
 *           example: Benefício suspenso temporariamente
 *         criado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T08:30:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T10:00:00Z
 */

/**
 * @swagger
 * /funcionarios-beneficios:
 *   get:
 *     summary: Lista todos os vínculos de benefícios com funcionários
 *     tags: [FuncionarioBeneficio]
 *     responses:
 *       200:
 *         description: Lista de vínculos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FuncionarioBeneficio'
 */
router.get('/', funcionarioBeneficioController.getAll);

/**
 * @swagger
 * /funcionarios-beneficios/{id}:
 *   get:
 *     summary: Retorna um vínculo de benefício pelo ID
 *     tags: [FuncionarioBeneficio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do vínculo
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vínculo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FuncionarioBeneficio'
 *       404:
 *         description: Vínculo não encontrado
 */
router.get('/:id', funcionarioBeneficioController.getById);

/**
 * @swagger
 * /funcionarios-beneficios:
 *   post:
 *     summary: Cria um novo vínculo entre funcionário e benefício
 *     tags: [FuncionarioBeneficio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FuncionarioBeneficio'
 *     responses:
 *       201:
 *         description: Vínculo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FuncionarioBeneficio'
 *       400:
 *         description: Erro de validação dos dados
 */
router.post('/', funcionarioBeneficioController.create);

/**
 * @swagger
 * /funcionarios-beneficios/{id}:
 *   put:
 *     summary: Atualiza um vínculo existente entre funcionário e benefício
 *     tags: [FuncionarioBeneficio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do vínculo
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FuncionarioBeneficio'
 *     responses:
 *       200:
 *         description: Vínculo atualizado com sucesso
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Vínculo não encontrado
 */
router.put('/:id', funcionarioBeneficioController.update);

/**
 * @swagger
 * /funcionarios-beneficios/{id}:
 *   delete:
 *     summary: Remove um vínculo entre funcionário e benefício
 *     tags: [FuncionarioBeneficio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do vínculo
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Vínculo removido com sucesso
 *       404:
 *         description: Vínculo não encontrado
 */
router.delete('/:id', funcionarioBeneficioController.delete);

module.exports = router;
