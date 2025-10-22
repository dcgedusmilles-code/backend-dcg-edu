const express = require('express');
const controller = require('../../controllers/pedagogico/academic_calendar_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CalendarioAcademico
 *   description: Gestão do calendário acadêmico
 */

/**
 * @swagger
 * /calendarios:
 *   get:
 *     summary: Lista todos os calendários acadêmicos
 *     tags: [CalendarioAcademico]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /calendarios/{id}:
 *   get:
 *     summary: Obtém um calendário acadêmico pelo ID
 *     tags: [CalendarioAcademico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do calendário
 *     responses:
 *       200:
 *         description: Calendário encontrado
 *       404:
 *         description: Não encontrado
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /calendarios:
 *   post:
 *     summary: Cria um novo calendário acadêmico
 *     tags: [CalendarioAcademico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ano_letivo:
 *                 type: integer
 *               semestre:
 *                 type: integer
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               data_fim:
 *                 type: string
 *                 format: date
 *               feriados:
 *                 type: array
 *                 items:
 *                   type: string
 *               eventos_academicos:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /calendarios/{id}:
 *   put:
 *     summary: Atualiza um calendário acadêmico
 *     tags: [CalendarioAcademico]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /calendarios/{id}:
 *   delete:
 *     summary: Exclui um calendário acadêmico
 *     tags: [CalendarioAcademico]
 */
router.delete('/:id', controller.deletar);

module.exports = router;
