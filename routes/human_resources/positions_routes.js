const express = require('express');
const controller = require('../../controllers/human_resources/positions_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cargos
 *   description: Endpoints de gestão de cargos internos
 */

/**
 * @swagger
 * /cargos:
 *   get:
 *     summary: Lista todos os cargos
 *     tags: [Cargos]
 *     responses:
 *       200:
 *         description: Lista de cargos retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /cargos/{id}:
 *   get:
 *     summary: Busca um cargo pelo ID
 *     tags: [Cargos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Cargo encontrado }
 *       404: { description: Cargo não encontrado }
 */
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /cargos:
 *   post:
 *     summary: Cria um novo cargo
 *     tags: [Cargos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome: { type: string }
 *               descricao: { type: string }
 *               departamento_id: { type: integer }
 *               salario_base: { type: number }
 *     responses:
 *       201: { description: Cargo criado com sucesso }
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /cargos/{id}:
 *   put:
 *     summary: Atualiza um cargo existente
 *     tags: [Cargos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: integer }
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /cargos/{id}:
 *   delete:
 *     summary: Remove um cargo
 *     tags: [Cargos]
 */
router.delete('/:id', controller.deletar);

module.exports = router;
