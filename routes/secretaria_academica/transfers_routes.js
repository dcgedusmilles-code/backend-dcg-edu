const express = require('express');
const router = express.Router();
const controller = require('../../controllers/secretaria_academica/transfers_controller');

/**
 * @swagger
 * tags:
 *   name: Transferencias
 *   description: Gestão de transferências de alunos
 */

/**
 * @swagger
 * /transferencias:
 *   get:
 *     summary: Lista todas as transferências
 *     tags: [Transferencias]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /transferencias/{id}:
 *   get:
 *     summary: Busca uma transferência por ID
 *     tags: [Transferencias]
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
 * /transferencias:
 *   post:
 *     summary: Cria uma nova transferência
 *     tags: [Transferencias]
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /transferencias/{id}:
 *   put:
 *     summary: Atualiza uma transferência existente
 *     tags: [Transferencias]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /transferencias/{id}:
 *   delete:
 *     summary: Exclui uma transferência
 *     tags: [Transferencias]
 */
router.delete('/:id', controller.excluir);

module.exports = router;
