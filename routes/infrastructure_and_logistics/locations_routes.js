const express = require('express');
const router = express.Router();
const localController = require('../../controllers/infrastructure_and_logistics/locations_controller');

/**
 * @swagger
 * tags:
 *   name: Locais
 *   description: Gestão de locais e espaços físicos
 */

/**
 * @swagger
 * /api/locais:
 *   get:
 *     summary: Lista todos os locais
 *     tags: [Locais]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', localController.getAll);

/**
 * @swagger
 * /api/locais/{id}:
 *   get:
 *     summary: Retorna um local específico
 *     tags: [Locais]
 */
router.get('/:id', localController.getById);

/**
 * @swagger
 * /api/locais:
 *   post:
 *     summary: Cria um novo local
 *     tags: [Locais]
 */
router.post('/', localController.create);

/**
 * @swagger
 * /api/locais/{id}:
 *   put:
 *     summary: Atualiza um local existente
 *     tags: [Locais]
 */
router.put('/:id', localController.update);

/**
 * @swagger
 * /api/locais/{id}:
 *   delete:
 *     summary: Remove um local
 *     tags: [Locais]
 */
router.delete('/:id', localController.delete);

module.exports = router;
