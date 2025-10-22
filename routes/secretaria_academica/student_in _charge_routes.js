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
router.get('/', controller.getAll);

/**
 * @swagger
 * /aluno-encarregado/{id}:
 *   get:
 *     summary: Obtém um vínculo específico por ID
 *     tags: [AlunoEncarregado]
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /aluno-encarregado:
 *   post:
 *     summary: Cria um novo vínculo aluno-encarregado
 *     tags: [AlunoEncarregado]
 */
router.post('/', controller.create);

/**
 * @swagger
 * /aluno-encarregado/{id}:
 *   put:
 *     summary: Atualiza um vínculo existente
 *     tags: [AlunoEncarregado]
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /aluno-encarregado/{id}:
 *   delete:
 *     summary: Remove um vínculo aluno-encarregado
 *     tags: [AlunoEncarregado]
 */
router.delete('/:id', controller.delete);

module.exports = router;
