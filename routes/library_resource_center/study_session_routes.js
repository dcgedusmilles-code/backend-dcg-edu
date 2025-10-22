const express = require('express');
const router = express.Router();
const sessaoEstudoController = require('../../controllers/library_resource_center/study_session_controller');

/**
 * @swagger
 * tags:
 *   name: Sessões de Estudo
 *   description: Gestão das sessões de estudo da biblioteca
 */

/**
 * @swagger
 * /sessoes-estudo:
 *   get:
 *     summary: Lista todas as sessões de estudo
 *     tags: [Sessões de Estudo]
 *     responses:
 *       200:
 *         description: Lista de sessões retornada com sucesso
 */
router.get('/', sessaoEstudoController.listar);

/**
 * @swagger
 * /sessoes-estudo/{id}:
 *   get:
 *     summary: Busca uma sessão de estudo pelo ID
 *     tags: [Sessões de Estudo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da sessão
 *     responses:
 *       200:
 *         description: Sessão encontrada
 *       404:
 *         description: Sessão não encontrada
 */
router.get('/:id', sessaoEstudoController.buscarPorId);

/**
 * @swagger
 * /sessoes-estudo:
 *   post:
 *     summary: Cria uma nova sessão de estudo
 *     tags: [Sessões de Estudo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: integer
 *               local:
 *                 type: string
 *               data_inicio:
 *                 type: string
 *                 format: date-time
 *               data_fim:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sessão criada com sucesso
 */
router.post('/', sessaoEstudoController.criar);

/**
 * @swagger
 * /sessoes-estudo/{id}:
 *   put:
 *     summary: Atualiza uma sessão de estudo
 *     tags: [Sessões de Estudo]
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
 *     responses:
 *       200:
 *         description: Sessão atualizada
 *       404:
 *         description: Sessão não encontrada
 */
router.put('/:id', sessaoEstudoController.atualizar);

/**
 * @swagger
 * /sessoes-estudo/{id}:
 *   delete:
 *     summary: Remove uma sessão de estudo
 *     tags: [Sessões de Estudo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Sessão removida com sucesso
 *       404:
 *         description: Sessão não encontrada
 */
router.delete('/:id', sessaoEstudoController.remover);

module.exports = router;
