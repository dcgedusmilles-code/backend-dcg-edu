const express = require('express');
const router = express.Router();
const controller = require('../../controllers/library_resource_center/acquisition_suggestions_controller');

/**
 * @swagger
 * tags:
 *   name: SugestaoAquisicao
 *   description: Gestão de sugestões de aquisição de livros
 */

/**
 * @swagger
 * /sugestoes:
 *   get:
 *     summary: Lista todas as sugestões de aquisição
 *     tags: [SugestaoAquisicao]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/sugestoes', controller.listar);

/**
 * @swagger
 * /sugestoes/{id}:
 *   get:
 *     summary: Retorna uma sugestão específica
 *     tags: [SugestaoAquisicao]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Sugestão encontrada
 *       404:
 *         description: Sugestão não encontrada
 */
router.get('/sugestoes/:id', controller.obter);

/**
 * @swagger
 * /sugestoes:
 *   post:
 *     summary: Cria uma nova sugestão de aquisição
 *     tags: [SugestaoAquisicao]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario: { type: integer }
 *               titulo_sugerido: { type: string }
 *               autor: { type: string }
 *               tipo: { type: string }
 *               justificativa: { type: string }
 *               data_sugestao: { type: string, format: date }
 *               status: { type: string }
 *     responses:
 *       201:
 *         description: Sugestão criada com sucesso
 */
router.post('/sugestoes', controller.criar);

/**
 * @swagger
 * /sugestoes/{id}:
 *   put:
 *     summary: Atualiza uma sugestão de aquisição existente
 *     tags: [SugestaoAquisicao]
 */
router.put('/sugestoes/:id', controller.atualizar);

/**
 * @swagger
 * /sugestoes/{id}:
 *   delete:
 *     summary: Exclui uma sugestão de aquisição
 *     tags: [SugestaoAquisicao]
 */
router.delete('/sugestoes/:id', controller.excluir);

module.exports = router;
