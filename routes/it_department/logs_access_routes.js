const express = require('express');
const router = express.Router();
const controller = require('../../controllers/it_department/logs_access_controller');

/**
 * @swagger
 * tags:
 *   name: LogAcesso
 *   description: Gestão de logs de acesso dos usuários
 */

/**
 * @swagger
 * /logs:
 *   get:
 *     summary: Lista todos os logs de acesso
 *     tags: [LogAcesso]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/logs', controller.listar);

/**
 * @swagger
 * /logs/{id}:
 *   get:
 *     summary: Retorna um log específico
 *     tags: [LogAcesso]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Log encontrado
 *       404:
 *         description: Log não encontrado
 */
router.get('/logs/:id', controller.obter);

/**
 * @swagger
 * /logs:
 *   post:
 *     summary: Cria um novo log de acesso
 *     tags: [LogAcesso]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario_id:
 *                 type: integer
 *               sistema:
 *                 type: string
 *               acao:
 *                 type: string
 *               data_hora:
 *                 type: string
 *                 format: date-time
 *               ip_origem:
 *                 type: string
 *     responses:
 *       201:
 *         description: Log criado
 */
router.post('/logs', controller.criar);

/**
 * @swagger
 * /logs/{id}:
 *   put:
 *     summary: Atualiza um log de acesso
 *     tags: [LogAcesso]
 */
router.put('/logs/:id', controller.atualizar);

/**
 * @swagger
 * /logs/{id}:
 *   delete:
 *     summary: Exclui um log de acesso
 *     tags: [LogAcesso]
 */
router.delete('/logs/:id', controller.excluir);

module.exports = router;
