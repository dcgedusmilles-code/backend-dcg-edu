'use strict';
const express = require('express');
const router = express.Router();
const turmaController = require('../../controllers/training_coordinators/class_teacher_controller');

/**
 * @swagger
 * tags:
 *   name: Turmas
 *   description: Gestão de turmas, incluindo criação, atualização e associação com cursos e coordenadores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Turma:
 *       type: object
 *       required:
 *         - nome
 *         - curso_id
 *         - coordenador_id
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da turma
 *           example: 1
 *         nome:
 *           type: string
 *           description: Nome ou identificação da turma
 *           example: Turma A - Engenharia de Software
 *         descricao:
 *           type: string
 *           description: Breve descrição sobre a turma
 *           example: Turma noturna de Engenharia de Software - 2025
 *         curso_id:
 *           type: integer
 *           description: ID do curso ao qual a turma pertence
 *           example: 10
 *         coordenador_id:
 *           type: integer
 *           description: ID do coordenador responsável pela turma
 *           example: 3
 *         ano:
 *           type: integer
 *           description: Ano letivo da turma
 *           example: 2025
 *         semestre:
 *           type: string
 *           description: Semestre de funcionamento da turma
 *           example: 1º Semestre
 *         turno:
 *           type: string
 *           description: Turno da turma (matutino, vespertino, noturno)
 *           example: Noturno
 *         status:
 *           type: string
 *           description: Status atual da turma (ativa, inativa, concluída)
 *           example: ativa
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *           example: 2025-02-01T08:00:00Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *           example: 2025-06-10T10:30:00Z
 */

/**
 * @swagger
 * /turmas:
 *   get:
 *     summary: Lista todas as turmas cadastradas
 *     tags: [Turmas]
 *     responses:
 *       200:
 *         description: Lista de turmas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Turma'
 */
router.get('/turmas', turmaController.listar);

/**
 * @swagger
 * /turmas/{id}:
 *   get:
 *     summary: Obtém os detalhes de uma turma pelo ID
 *     tags: [Turmas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da turma
 *     responses:
 *       200:
 *         description: Turma encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Turma'
 *       404:
 *         description: Turma não encontrada
 */
router.get('/turmas/:id', turmaController.obter);

/**
 * @swagger
 * /turmas:
 *   post:
 *     summary: Cria uma nova turma
 *     tags: [Turmas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Turma'
 *     responses:
 *       201:
 *         description: Turma criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Turma'
 *       400:
 *         description: Erro ao criar a turma
 */
router.post('/turmas', turmaController.criar);

/**
 * @swagger
 * /turmas/{id}:
 *   put:
 *     summary: Atualiza os dados de uma turma existente
 *     tags: [Turmas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da turma
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Turma'
 *     responses:
 *       200:
 *         description: Turma atualizada com sucesso
 *       400:
 *         description: Erro ao atualizar a turma
 *       404:
 *         description: Turma não encontrada
 */
router.put('/turmas/:id', turmaController.atualizar);

/**
 * @swagger
 * /turmas/{id}:
 *   delete:
 *     summary: Remove uma turma do sistema
 *     tags: [Turmas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da turma
 *     responses:
 *       200:
 *         description: Turma removida com sucesso
 *       404:
 *         description: Turma não encontrada
 */
router.delete('/turmas/:id', turmaController.deletar);

module.exports = router;
