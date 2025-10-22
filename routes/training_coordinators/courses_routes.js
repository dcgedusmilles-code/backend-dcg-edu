const express = require('express');
const router = express.Router();
const cursoController = require('../../controllers/training_coordinators/courses_controller');

/**
 * @swagger
 * tags:
 *   name: Cursos
 *   description: Gestão de cursos de treinamento
 */

/**
 * @swagger
 * /api/cursos:
 *   get:
 *     summary: Lista todos os cursos
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos
 */
router.get('/', cursoController.listar);

/**
 * @swagger
 * /api/cursos/{id}:
 *   get:
 *     summary: Obtém um curso pelo ID
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Curso encontrado
 *       404:
 *         description: Curso não encontrado
 */
router.get('/:id', cursoController.obter);

/**
 * @swagger
 * /api/cursos:
 *   post:
 *     summary: Cria um novo curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               carga_horaria:
 *                 type: integer
 *               modalidade:
 *                 type: string
 *               nivel:
 *                 type: string
 *               coordenador_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Curso criado com sucesso
 */
router.post('/', cursoController.criar);

/**
 * @swagger
 * /api/cursos/{id}:
 *   put:
 *     summary: Atualiza um curso existente
 *     tags: [Cursos]
 */
router.put('/:id', cursoController.atualizar);

/**
 * @swagger
 * /api/cursos/{id}:
 *   delete:
 *     summary: Exclui um curso
 *     tags: [Cursos]
 */
router.delete('/:id', cursoController.excluir);

module.exports = router;
