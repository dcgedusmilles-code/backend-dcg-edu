const express = require('express');
const router = express.Router();
const controller = require('../../controllers/pedagogico/lesson_plan_controller');

/**
 * @swagger
 * tags:
 *   name: PlanosDeAula
 *   description: Gestão de Planos de Aula
 */

/**
 * @swagger
 * /planos-de-aula:
 *   get:
 *     summary: Lista todos os planos de aula
 *     tags: [PlanosDeAula]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /planos-de-aula/{id}:
 *   get:
 *     summary: Obtém um plano de aula pelo ID
 *     tags: [PlanosDeAula]
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /planos-de-aula:
 *   post:
 *     summary: Cria um novo plano de aula
 *     tags: [PlanosDeAula]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo: { type: string }
 *               objetivos: { type: string }
 *               conteudo: { type: string }
 *               metodologia: { type: string }
 *               avaliacao: { type: string }
 *               disciplina_id: { type: integer }
 *               professor_id: { type: integer }
 *               turma_id: { type: integer }
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /planos-de-aula/{id}:
 *   put:
 *     summary: Atualiza um plano de aula existente
 *     tags: [PlanosDeAula]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /planos-de-aula/{id}:
 *   delete:
 *     summary: Remove um plano de aula
 *     tags: [PlanosDeAula]
 */
router.delete('/:id', controller.deletar);

module.exports = router;
