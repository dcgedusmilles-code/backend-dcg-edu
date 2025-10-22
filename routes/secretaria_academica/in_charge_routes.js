const express = require('express');
const router = express.Router();
const encarregadoController = require('../../controllers/secretaria_academica/in_charge_controller');

/**
 * @swagger
 * tags:
 *   name: Encarregados
 *   description: Gestão dos encarregados de educação
 */

/**
 * @swagger
 * /api/encarregados:
 *   get:
 *     summary: Lista todos os encarregados
 *     tags: [Encarregados]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', encarregadoController.findAll);

/**
 * @swagger
 * /api/encarregados/{id}:
 *   get:
 *     summary: Obtém um encarregado pelo ID
 *     tags: [Encarregados]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: integer }
 */
router.get('/:id', encarregadoController.findById);

/**
 * @swagger
 * /api/encarregados:
 *   post:
 *     summary: Cria um novo encarregado
 *     tags: [Encarregados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome: { type: string }
 *               telefone: { type: string }
 *               email: { type: string }
 *               parentesco: { type: string }
 *               endereco: { type: string }
 */
router.post('/', encarregadoController.create);

/**
 * @swagger
 * /api/encarregados/{id}:
 *   put:
 *     summary: Atualiza dados de um encarregado
 *     tags: [Encarregados]
 */
router.put('/:id', encarregadoController.update);

/**
 * @swagger
 * /api/encarregados/{id}:
 *   delete:
 *     summary: Remove um encarregado
 *     tags: [Encarregados]
 */
router.delete('/:id', encarregadoController.delete);

module.exports = router;
