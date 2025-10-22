const express = require('express');
const router = express.Router();
const controller = require('../../controllers/library_resource_center/digital_catalog_controller');

/**
 * @swagger
 * tags:
 *   name: CatalogoDigital
 *   description: Gestão do catálogo digital da biblioteca
 */

/**
 * @swagger
 * /api/catalogos-digitais:
 *   get:
 *     summary: Lista todos os catálogos digitais
 *     tags: [CatalogoDigital]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/catalogos-digitais/{id}:
 *   get:
 *     summary: Busca um catálogo digital pelo ID
 *     tags: [CatalogoDigital]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 */
router.get('/:id', controller.buscar);

/**
 * @swagger
 * /api/catalogos-digitais:
 *   post:
 *     summary: Cria um novo catálogo digital
 *     tags: [CatalogoDigital]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CatalogoDigital'
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/catalogos-digitais/{id}:
 *   put:
 *     summary: Atualiza um catálogo digital existente
 *     tags: [CatalogoDigital]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/catalogos-digitais/{id}:
 *   delete:
 *     summary: Remove um catálogo digital
 *     tags: [CatalogoDigital]
 */
router.delete('/:id', controller.remover);

module.exports = router;
