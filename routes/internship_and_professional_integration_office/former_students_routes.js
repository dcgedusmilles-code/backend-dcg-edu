const express = require('express');
const router = express.Router();
const ExAlunoController = require('../../controllers/internship_and_professional_integration_office/former_students_controller');

/**
 * @swagger
 * tags:
 *   name: Ex-Alunos
 *   description: Gerenciamento de ex-alunos e sua empregabilidade
 */

/**
 * @swagger
 * /exalunos:
 *   get:
 *     summary: Lista todos os ex-alunos
 *     tags: [Ex-Alunos]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', ExAlunoController.findAll);

/**
 * @swagger
 * /exalunos/{id}:
 *   get:
 *     summary: Obtém um ex-aluno por ID
 *     tags: [Ex-Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Ex-aluno encontrado
 */
router.get('/:id', ExAlunoController.findById);

/**
 * @swagger
 * /exalunos:
 *   post:
 *     summary: Cria um novo ex-aluno
 *     tags: [Ex-Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_estudante:
 *                 type: integer
 *               empresa_atual:
 *                 type: string
 *               cargo_atual:
 *                 type: string
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               status_emprego:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ex-aluno criado
 */
router.post('/', ExAlunoController.create);

/**
 * @swagger
 * /exalunos/{id}:
 *   put:
 *     summary: Atualiza dados de um ex-aluno
 *     tags: [Ex-Alunos]
 */
router.put('/:id', ExAlunoController.update);

/**
 * @swagger
 * /exalunos/{id}:
 *   delete:
 *     summary: Remove um ex-aluno
 *     tags: [Ex-Alunos]
 */
router.delete('/:id', ExAlunoController.delete);

module.exports = router;
