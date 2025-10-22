const express = require('express');
const router = express.Router();
const controller = require('../../controllers/internship_and_professional_integration_office/applications_internships_controller');

/**
 * @swagger
 * tags:
 *   name: Candidaturas
 *   description: Gestão de candidaturas de estágio
 */

/**
 * @swagger
 * /candidaturas:
 *   get:
 *     summary: Lista todas as candidaturas
 *     tags: [Candidaturas]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /candidaturas/{id}:
 *   get:
 *     summary: Obtém uma candidatura específica
 *     tags: [Candidaturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Candidatura encontrada
 */
router.get('/:id', controller.obterPorId);

/**
 * @swagger
 * /candidaturas:
 *   post:
 *     summary: Cria uma nova candidatura
 *     tags: [Candidaturas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_vaga:
 *                 type: integer
 *               id_estudante:
 *                 type: integer
 *               data_candidatura:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Candidatura criada com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /candidaturas/{id}:
 *   put:
 *     summary: Atualiza uma candidatura existente
 *     tags: [Candidaturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Candidatura atualizada
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /candidaturas/{id}:
 *   delete:
 *     summary: Remove uma candidatura
 *     tags: [Candidaturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Removida com sucesso
 */
router.delete('/:id', controller.remover);

module.exports = router;
