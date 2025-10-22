const express = require('express');
const router = express.Router();
const controller = require('../../controllers/secretaria_academica/course_registration_controller');

/**
 * @swagger
 * tags:
 *   name: InscricaoDisciplina
 *   description: Gestão das inscrições em disciplinas
 */

/**
 * @swagger
 * /api/inscricoes:
 *   get:
 *     summary: Lista todas as inscrições em disciplinas
 *     tags: [InscricaoDisciplina]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/inscricoes/{id}:
 *   get:
 *     summary: Busca uma inscrição por ID
 *     tags: [InscricaoDisciplina]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Inscrição encontrada
 */
router.get('/:id', controller.buscar);

/**
 * @swagger
 * /api/inscricoes:
 *   post:
 *     summary: Cria uma nova inscrição em disciplina
 *     tags: [InscricaoDisciplina]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricula_id: { type: integer }
 *               disciplina_id: { type: integer }
 *               semestre: { type: string }
 *               ano: { type: integer }
 *               status: { type: string }
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/inscricoes/{id}:
 *   put:
 *     summary: Atualiza uma inscrição
 *     tags: [InscricaoDisciplina]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/inscricoes/{id}:
 *   delete:
 *     summary: Remove uma inscrição
 *     tags: [InscricaoDisciplina]
 */
router.delete('/:id', controller.excluir);

module.exports = router;
