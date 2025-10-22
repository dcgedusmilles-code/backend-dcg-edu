const express = require('express');
const router = express.Router();
const controller = require('../../controllers/secretaria_academica/enrollment_controller');

/**
 * @swagger
 * tags:
 *   name: Matricula
 *   description: Gestão das matrículas acadêmicas
 */

/**
 * @swagger
 * /api/matriculas:
 *   get:
 *     summary: Lista todas as matrículas
 *     tags: [Matricula]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/matriculas/{id}:
 *   get:
 *     summary: Busca uma matrícula por ID
 *     tags: [Matricula]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Matrícula encontrada
 */
router.get('/:id', controller.buscar);

/**
 * @swagger
 * /api/matriculas:
 *   post:
 *     summary: Cria uma nova matrícula
 *     tags: [Matricula]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               aluno_id: { type: integer }
 *               curso_id: { type: integer }
 *               turma_id: { type: integer }
 *               data_matricula: { type: string, format: date }
 *               status: { type: string }
 *     responses:
 *       201:
 *         description: Criada com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/matriculas/{id}:
 *   put:
 *     summary: Atualiza uma matrícula
 *     tags: [Matricula]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/matriculas/{id}:
 *   delete:
 *     summary: Remove uma matrícula
 *     tags: [Matricula]
 */
router.delete('/:id', controller.excluir);

module.exports = router;
