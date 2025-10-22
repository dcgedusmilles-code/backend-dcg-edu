const express = require('express');
const router = express.Router();
const inscricaoController = require('../../controllers/training_coordinators/registration_controller');

/**
 * @swagger
 * tags:
 *   name: Inscrições
 *   description: Gestão de inscrições em turmas
 */

/**
 * @swagger
 * /inscricoes:
 *   get:
 *     summary: Lista todas as inscrições
 *     tags: [Inscrições]
 *     responses:
 *       200:
 *         description: Lista de inscrições
 */
router.get('/', inscricaoController.getAll);

/**
 * @swagger
 * /inscricoes/{id}:
 *   get:
 *     summary: Busca uma inscrição por ID
 *     tags: [Inscrições]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da inscrição
 *     responses:
 *       200:
 *         description: Inscrição encontrada
 *       404:
 *         description: Inscrição não encontrada
 */
router.get('/:id', inscricaoController.getById);

/**
 * @swagger
 * /inscricoes:
 *   post:
 *     summary: Cria uma nova inscrição
 *     tags: [Inscrições]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               participante_id:
 *                 type: integer
 *               turma_id:
 *                 type: integer
 *               data_inscricao:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Inscrição criada
 */
router.post('/', inscricaoController.create);

/**
 * @swagger
 * /inscricoes/{id}:
 *   put:
 *     summary: Atualiza uma inscrição
 *     tags: [Inscrições]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Inscrição atualizada
 *       404:
 *         description: Inscrição não encontrada
 */
router.put('/:id', inscricaoController.update);

/**
 * @swagger
 * /inscricoes/{id}:
 *   delete:
 *     summary: Remove uma inscrição
 *     tags: [Inscrições]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Inscrição removida
 */
router.delete('/:id', inscricaoController.delete);

module.exports = router;
