const express = require('express');
const router = express.Router();
const controller = require('../../controllers/student_support_office/student_benefits_controller');

/**
 * @swagger
 * tags:
 *   name: Benefícios Estudantis
 *   description: Gestão de benefícios estudantis
 */

/**
 * @swagger
 * /beneficios:
 *   get:
 *     summary: Lista todos os benefícios estudantis
 *     tags: [Benefícios Estudantis]
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /beneficios/{id}:
 *   get:
 *     summary: Busca um benefício por ID
 *     tags: [Benefícios Estudantis]
 */
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /beneficios:
 *   post:
 *     summary: Cria um novo benefício estudantil
 *     tags: [Benefícios Estudantis]
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /beneficios/{id}:
 *   put:
 *     summary: Atualiza um benefício estudantil
 *     tags: [Benefícios Estudantis]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /beneficios/{id}:
 *   delete:
 *     summary: Remove um benefício estudantil
 *     tags: [Benefícios Estudantis]
 */
router.delete('/:id', controller.remover);

module.exports = router;
