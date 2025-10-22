const express = require('express');
const router = express.Router();
const controller = require('../../controllers/secretaria_academica/academic_records_controller');

/**
 * @swagger
 * tags:
 *   name: Histórico Acadêmico
 *   description: Gerenciamento dos históricos dos alunos
 */

/**
 * @swagger
 * /historicos:
 *   get:
 *     summary: Lista todos os históricos acadêmicos
 *     tags: [Histórico Acadêmico]
 *     responses:
 *       200:
 *         description: Lista de históricos
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /historicos/{id}:
 *   get:
 *     summary: Busca um histórico por ID
 *     tags: [Histórico Acadêmico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do histórico
 *     responses:
 *       200:
 *         description: Histórico encontrado
 *       404:
 *         description: Não encontrado
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /historicos:
 *   post:
 *     summary: Cria um novo histórico acadêmico
 *     tags: [Histórico Acadêmico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HistoricoAcademico'
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/', controller.create);

/**
 * @swagger
 * /historicos/{id}:
 *   put:
 *     summary: Atualiza um histórico acadêmico
 *     tags: [Histórico Acadêmico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Atualizado com sucesso
 *       404:
 *         description: Não encontrado
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /historicos/{id}:
 *   delete:
 *     summary: Remove um histórico acadêmico
 *     tags: [Histórico Acadêmico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Removido com sucesso
 */
router.delete('/:id', controller.delete);

module.exports = router;
