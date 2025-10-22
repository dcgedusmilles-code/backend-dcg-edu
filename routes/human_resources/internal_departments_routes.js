'use strict';
const express = require('express');
const router = express.Router();
const departamentoInternoController = require('../../controllers/human_resources/internal_departments_controller');

/**
 * @swagger
 * tags:
 *   name: DepartamentosInternos
 *   description: Gestão dos departamentos internos da organização
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DepartamentoInterno:
 *       type: object
 *       required:
 *         - nome
 *         - sigla
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do departamento interno
 *           example: 3
 *         nome:
 *           type: string
 *           description: Nome completo do departamento
 *           example: Departamento de Recursos Humanos
 *         sigla:
 *           type: string
 *           description: Sigla ou abreviação do departamento
 *           example: RH
 *         descricao:
 *           type: string
 *           description: Breve descrição do departamento
 *           example: Responsável pela gestão de pessoas e políticas trabalhistas
 *         localizacao:
 *           type: string
 *           description: Local físico do departamento
 *           example: Edifício Central - 2º Andar
 *         status:
 *           type: string
 *           enum: [Ativo, Inativo]
 *           example: Ativo
 *         criado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-01-10T09:30:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           example: 2025-10-17T12:45:00Z
 */

/**
 * @swagger
 * /departamentos:
 *   get:
 *     summary: Lista todos os departamentos internos
 *     tags: [DepartamentosInternos]
 *     responses:
 *       200:
 *         description: Lista de departamentos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DepartamentoInterno'
 */
router.get('/', departamentoInternoController.getAll);

/**
 * @swagger
 * /departamentos/{id}:
 *   get:
 *     summary: Obtém um departamento interno pelo ID
 *     tags: [DepartamentosInternos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do departamento interno
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Departamento interno encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DepartamentoInterno'
 *       404:
 *         description: Departamento não encontrado
 */
router.get('/:id', departamentoInternoController.getById);

/**
 * @swagger
 * /departamentos:
 *   post:
 *     summary: Cria um novo departamento interno
 *     tags: [DepartamentosInternos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DepartamentoInterno'
 *     responses:
 *       201:
 *         description: Departamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DepartamentoInterno'
 *       400:
 *         description: Erro nos dados enviados
 */
router.post('/', departamentoInternoController.create);

/**
 * @swagger
 * /departamentos/{id}:
 *   put:
 *     summary: Atualiza um departamento interno existente
 *     tags: [DepartamentosInternos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do departamento interno
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DepartamentoInterno'
 *     responses:
 *       200:
 *         description: Departamento atualizado com sucesso
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Departamento não encontrado
 */
router.put('/:id', departamentoInternoController.update);

/**
 * @swagger
 * /departamentos/{id}:
 *   delete:
 *     summary: Remove um departamento interno
 *     tags: [DepartamentosInternos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do departamento interno
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Departamento removido com sucesso
 *       404:
 *         description: Departamento não encontrado
 */
router.delete('/:id', departamentoInternoController.delete);

module.exports = router;
