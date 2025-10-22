const express = require('express');
const router = express.Router();
const participanteController = require('../../controllers/training_coordinators/perticipants_controller');

/**
 * @swagger
 * tags:
 *   name: Participantes
 *   description: Gestão de Participantes
 */

/**
 * @swagger
 * /api/participantes:
 *   get:
 *     summary: Lista todos os participantes
 *     tags: [Participantes]
 *     responses:
 *       200:
 *         description: Lista de participantes
 */
router.get('/', participanteController.listar);

/**
 * @swagger
 * /api/participantes/{id}:
 *   get:
 *     summary: Obtém um participante pelo ID
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Participante encontrado
 *       404:
 *         description: Participante não encontrado
 */
router.get('/:id', participanteController.obter);

/**
 * @swagger
 * /api/participantes:
 *   post:
 *     summary: Cria um novo participante
 *     tags: [Participantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               cpf:
 *                 type: string
 *               endereco:
 *                 type: string
 *     responses:
 *       201:
 *         description: Participante criado com sucesso
 */
router.post('/', participanteController.criar);

/**
 * @swagger
 * /api/participantes/{id}:
 *   put:
 *     summary: Atualiza um participante
 *     tags: [Participantes]
 */
router.put('/:id', participanteController.atualizar);

/**
 * @swagger
 * /api/participantes/{id}:
 *   delete:
 *     summary: Exclui um participante
 *     tags: [Participantes]
 */
router.delete('/:id', participanteController.excluir);

module.exports = router;
