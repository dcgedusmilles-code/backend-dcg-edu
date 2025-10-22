const express = require('express');
const router = express.Router();
const protocoloController = require('../../controllers/secretaria_academica/protocol_controller');

/**
 * @swagger
 * tags:
 *   name: Protocolos
 *   description: Gerenciamento de Protocolos
 */

/**
 * @swagger
 * /api/protocolos:
 *   get:
 *     summary: Lista todos os protocolos
 *     tags: [Protocolos]
 *     responses:
 *       200:
 *         description: Lista de protocolos
 */
router.get('/', protocoloController.findAll);

/**
 * @swagger
 * /api/protocolos/{id}:
 *   get:
 *     summary: Busca um protocolo por ID
 *     tags: [Protocolos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Protocolo encontrado
 */
router.get('/:id', protocoloController.findById);

/**
 * @swagger
 * /api/protocolos:
 *   post:
 *     summary: Cria um novo protocolo
 *     tags: [Protocolos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               aluno_id: { type: integer }
 *               tipo: { type: string }
 *               descricao: { type: string }
 *               data_abertura: { type: string, format: date-time }
 *               status: { type: string }
 *     responses:
 *       201:
 *         description: Protocolo criado
 */
router.post('/', protocoloController.create);

/**
 * @swagger
 * /api/protocolos/{id}:
 *   put:
 *     summary: Atualiza um protocolo existente
 *     tags: [Protocolos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Protocolo atualizado
 */
router.put('/:id', protocoloController.update);

/**
 * @swagger
 * /api/protocolos/{id}:
 *   delete:
 *     summary: Remove um protocolo
 *     tags: [Protocolos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       204:
 *         description: Deletado com sucesso
 */
router.delete('/:id', protocoloController.delete);

module.exports = router;
