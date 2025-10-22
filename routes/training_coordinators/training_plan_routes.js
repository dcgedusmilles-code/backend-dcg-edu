const express = require('express');
const router = express.Router();
const controller = require('../../controllers/training_coordinators/training_plan_controller');

/**
 * @swagger
 * tags:
 *   name: Planos de Aula
 *   description: Gestão dos planos de aula dos professores
 */

/**
 * @swagger
 * /planos-de-aula:
 *   get:
 *     summary: Lista todos os planos de aula
 *     tags: [Planos de Aula]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /planos-de-aula/{id}:
 *   get:
 *     summary: Obtém um plano de aula pelo ID
 *     tags: [Planos de Aula]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Plano encontrado
 *       404:
 *         description: Não encontrado
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /planos-de-aula:
 *   post:
 *     summary: Cria um novo plano de aula
 *     tags: [Planos de Aula]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               objetivos:
 *                 type: string
 *               conteudo:
 *                 type: string
 *               metodologia:
 *                 type: string
 *               avaliacao:
 *                 type: string
 *               disciplina_id:
 *                 type: integer
 *               professor_id:
 *                 type: integer
 *               turma_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Plano criado com sucesso
 */
router.post('/', controller.create);

/**
 * @swagger
 * /planos-de-aula/{id}:
 *   put:
 *     summary: Atualiza um plano de aula
 *     tags: [Planos de Aula]
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
 * /planos-de-aula/{id}:
 *   delete:
 *     summary: Remove um plano de aula
 *     tags: [Planos de Aula]
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
