const express = require('express');
const router = express.Router();
const controller = require('../../controllers/library_resource_center/copies_controller');

/**
 * @swagger
 * tags:
 *   name: Exemplar
 *   description: Gestão dos exemplares do acervo
 */

/**
 * @swagger
 * /api/exemplares:
 *   get:
 *     summary: Lista todos os exemplares
 *     tags: [Exemplar]
 *     responses:
 *       200:
 *         description: Lista de exemplares retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/exemplares/{id}:
 *   get:
 *     summary: Busca um exemplar pelo ID
 *     tags: [Exemplar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Exemplar encontrado
 */
router.get('/:id', controller.buscar);

/**
 * @swagger
 * /api/exemplares:
 *   post:
 *     summary: Cria um novo exemplar
 *     tags: [Exemplar]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Exemplar'
 *     responses:
 *       201:
 *         description: Exemplar criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/exemplares/{id}:
 *   put:
 *     summary: Atualiza um exemplar existente
 *     tags: [Exemplar]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/exemplares/{id}:
 *   delete:
 *     summary: Remove um exemplar
 *     tags: [Exemplar]
 */
router.delete('/:id', controller.remover);

module.exports = router;
