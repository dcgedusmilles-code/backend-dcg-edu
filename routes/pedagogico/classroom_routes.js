const express = require('express');
const controller = require('../../controllers/pedagogico/classroom_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Aula
 *   description: Gestão de Aulas
 */

/**
 * @swagger
 * /aulas:
 *   get:
 *     summary: Lista todas as aulas
 *     tags: [Aula]
 *     responses:
 *       200:
 *         description: Lista de aulas retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /aulas/{id}:
 *   get:
 *     summary: Obtém uma aula pelo ID
 *     tags: [Aula]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da aula
 *     responses:
 *       200:
 *         description: Aula encontrada
 *       404:
 *         description: Aula não encontrada
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /aulas:
 *   post:
 *     summary: Cria uma nova aula
 *     tags: [Aula]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 format: date
 *               hora_inicio:
 *                 type: string
 *               hora_fim:
 *                 type: string
 *               conteudo_previsto:
 *                 type: string
 *               disciplina_id:
 *                 type: integer
 *               professor_id:
 *                 type: integer
 *               turma_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Aula criada com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /aulas/{id}:
 *   put:
 *     summary: Atualiza uma aula existente
 *     tags: [Aula]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /aulas/{id}:
 *   delete:
 *     summary: Exclui uma aula
 *     tags: [Aula]
 */
router.delete('/:id', controller.deletar);

module.exports = router;
