const express = require('express');
const router = express.Router();
const controller = require('../../controllers/training_coordinators/training_coordinators_controller');

/**
 * @swagger
 * tags:
 *   name: Coordenadores de Treinamento
 *   description: Gestão dos coordenadores de treinamento
 */

/**
 * @swagger
 * /coordenadores-treinamento:
 *   get:
 *     summary: Lista todos os coordenadores de treinamento
 *     tags: [Coordenadores de Treinamento]
 *     responses:
 *       200:
 *         description: Lista de coordenadores
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /coordenadores-treinamento/{id}:
 *   get:
 *     summary: Obtém um coordenador de treinamento pelo ID
 *     tags: [Coordenadores de Treinamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do coordenador
 *     responses:
 *       200:
 *         description: Coordenador encontrado
 *       404:
 *         description: Coordenador não encontrado
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /coordenadores-treinamento:
 *   post:
 *     summary: Cria um novo coordenador de treinamento
 *     tags: [Coordenadores de Treinamento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               departamento_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Coordenador criado
 */
router.post('/', controller.create);

/**
 * @swagger
 * /coordenadores-treinamento/{id}:
 *   put:
 *     summary: Atualiza um coordenador de treinamento
 *     tags: [Coordenadores de Treinamento]
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
 *             properties:
 *               nome:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Coordenador atualizado
 *       404:
 *         description: Coordenador não encontrado
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /coordenadores-treinamento/{id}:
 *   delete:
 *     summary: Remove um coordenador de treinamento
 *     tags: [Coordenadores de Treinamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Coordenador removido
 */
router.delete('/:id', controller.delete);

module.exports = router;
