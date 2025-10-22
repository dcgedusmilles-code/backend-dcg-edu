const express = require('express');
const router = express.Router();
const controller = require('../../controllers/library_resource_center/collection_controller');

/**
 * @swagger
 * tags:
 *   name: Acervo
 *   description: Gestão do acervo da biblioteca
 */

/**
 * @swagger
 * /api/acervos:
 *   get:
 *     summary: Lista todos os itens do acervo
 *     tags: [Acervo]
 *     responses:
 *       200:
 *         description: Lista de acervos retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/acervos/{id}:
 *   get:
 *     summary: Busca um item do acervo pelo ID
 *     tags: [Acervo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item encontrado
 */
router.get('/:id', controller.buscar);

/**
 * @swagger
 * /api/acervos:
 *   post:
 *     summary: Cria um novo item no acervo
 *     tags: [Acervo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Acervo'
 *     responses:
 *       201:
 *         description: Item criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/acervos/{id}:
 *   put:
 *     summary: Atualiza um item do acervo
 *     tags: [Acervo]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/acervos/{id}:
 *   delete:
 *     summary: Remove um item do acervo
 *     tags: [Acervo]
 */
router.delete('/:id', controller.remover);

module.exports = router;
