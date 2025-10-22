const express = require('express');
const router = express.Router();
const controller = require('../../controllers/pedagogico/disciplines_controller');

/**
 * @swagger
 * tags:
 *   name: Disciplinas
 *   description: Gestão de Disciplinas
 */

/**
 * @swagger
 * /disciplinas:
 *   get:
 *     summary: Lista todas as disciplinas
 *     tags: [Disciplinas]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /disciplinas/{id}:
 *   get:
 *     summary: Obtém uma disciplina pelo ID
 *     tags: [Disciplinas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Não encontrado
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /disciplinas:
 *   post:
 *     summary: Cria uma nova disciplina
 *     tags: [Disciplinas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               carga_horaria:
 *                 type: integer
 *               curso_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /disciplinas/{id}:
 *   put:
 *     summary: Atualiza uma disciplina
 *     tags: [Disciplinas]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /disciplinas/{id}:
 *   delete:
 *     summary: Remove uma disciplina
 *     tags: [Disciplinas]
 */
router.delete('/:id', controller.deletar);

module.exports = router;
