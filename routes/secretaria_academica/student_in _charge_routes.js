const express = require('express');
const router = express.Router();
const controller = require('../../controllers/secretaria_academica/student_in _charge_controller');

/**
 * @swagger
 * tags:
 *   name: AlunoEncarregado
 *   description: API para gerenciar relações entre alunos e encarregados
 */

/**
 * @swagger
 * /aluno-encarregado:
 *   get:
 *     summary: Lista todos os vínculos aluno-encarregado
 *     tags: [AlunoEncarregado]
 *     responses:
 *       200:
 *         description: Lista de vínculos retornada
 */
router.get('/', controller.listarTodos);

/**
 * @swagger
 * /aluno-encarregado/{id}:
 *   get:
 *     summary: Obtém um vínculo específico por ID
 *     tags: [AlunoEncarregado]
 */
router.get('/:id', controller.listarTodos);

module.exports = router;
