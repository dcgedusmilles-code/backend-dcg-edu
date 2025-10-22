const express = require('express');
const router = express.Router();
const controller = require('../../controllers/secretaria_academica/students_controller');

/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Gestão de alunos
 */

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Lista de alunos retornada
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Obtém um aluno pelo ID
 *     tags: [Alunos]
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cadastra um novo aluno
 *     tags: [Alunos]
 */
router.post('/', controller.create);

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza os dados de um aluno
 *     tags: [Alunos]
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Exclui um aluno
 *     tags: [Alunos]
 */
router.delete('/:id', controller.delete);

module.exports = router;
