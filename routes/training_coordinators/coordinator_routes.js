'use strict';
const express = require('express');
const router = express.Router();
const coordenadorController = require('../../controllers/training_coordinators/coordinator_controller');

/**
 * @swagger
 * tags:
 *   name: Coordenadores
 *   description: Gestão de coordenadores de cursos e departamentos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Coordenador:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - telefone
 *         - departamento_id
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do coordenador
 *           example: 1
 *         nome:
 *           type: string
 *           description: Nome completo do coordenador
 *           example: João da Silva
 *         email:
 *           type: string
 *           description: Endereço de e-mail institucional
 *           example: joao.silva@ifes.edu.br
 *         telefone:
 *           type: string
 *           description: Telefone de contato do coordenador
 *           example: "+244 923 456 789"
 *         departamento_id:
 *           type: integer
 *           description: ID do departamento ao qual o coordenador pertence
 *           example: 2
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *           example: 2025-01-10T12:30:00Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *           example: 2025-05-15T09:20:00Z
 */

/**
 * @swagger
 * /coordenadores:
 *   get:
 *     summary: Lista todos os coordenadores cadastrados
 *     tags: [Coordenadores]
 *     responses:
 *       200:
 *         description: Lista de coordenadores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coordenador'
 */
router.get('/coordenadores', coordenadorController.listar);

/**
 * @swagger
 * /coordenadores/{id}:
 *   get:
 *     summary: Obtém os detalhes de um coordenador pelo ID
 *     tags: [Coordenadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do coordenador
 *     responses:
 *       200:
 *         description: Coordenador encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coordenador'
 *       404:
 *         description: Coordenador não encontrado
 */
router.get('/coordenadores/:id', coordenadorController.obter);

/**
 * @swagger
 * /coordenadores:
 *   post:
 *     summary: Cria um novo coordenador
 *     tags: [Coordenadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Coordenador'
 *     responses:
 *       201:
 *         description: Coordenador criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coordenador'
 *       400:
 *         description: Erro ao criar o coordenador
 */
router.post('/coordenadores', coordenadorController.criar);

/**
 * @swagger
 * /coordenadores/{id}:
 *   put:
 *     summary: Atualiza os dados de um coordenador existente
 *     tags: [Coordenadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do coordenador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Coordenador'
 *     responses:
 *       200:
 *         description: Coordenador atualizado com sucesso
 *       400:
 *         description: Erro ao atualizar o coordenador
 *       404:
 *         description: Coordenador não encontrado
 */
router.put('/coordenadores/:id', coordenadorController.atualizar);

/**
 * @swagger
 * /coordenadores/{id}:
 *   delete:
 *     summary: Remove um coordenador do sistema
 *     tags: [Coordenadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do coordenador
 *     responses:
 *       200:
 *         description: Coordenador removido com sucesso
 *       404:
 *         description: Coordenador não encontrado
 */
router.delete('/coordenadores/:id', coordenadorController.deletar);

module.exports = router;
