const express = require('express');
const router = express.Router();
const multaController = require('../../controllers/library_resource_center/fines_controller');

/**
 * @swagger
 * tags:
 *   name: Multas
 *   description: Gerenciamento de multas
 */

/**
 * @swagger
 * /multas:
 *   get:
 *     summary: Lista todas as multas
 *     tags: [Multas]
 *     responses:
 *       200:
 *         description: Lista de multas
 */
router.get('/', multaController.listar);

/**
 * @swagger
 * /multas/{id}:
 *   get:
 *     summary: Busca uma multa pelo ID
 *     tags: [Multas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Multa encontrada
 */
router.get('/:id', multaController.buscarPorId);

/**
 * @swagger
 * /multas:
 *   post:
 *     summary: Cria uma nova multa
 *     tags: [Multas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Multa'
 *     responses:
 *       201:
 *         description: Multa criada
 */
router.post('/', multaController.criar);

/**
 * @swagger
 * /multas/{id}:
 *   put:
 *     summary: Atualiza uma multa
 *     tags: [Multas]
 */
router.put('/:id', multaController.atualizar);

/**
 * @swagger
 * /multas/{id}:
 *   delete:
 *     summary: Remove uma multa
 *     tags: [Multas]
 */
router.delete('/:id', multaController.deletar);

module.exports = router;
