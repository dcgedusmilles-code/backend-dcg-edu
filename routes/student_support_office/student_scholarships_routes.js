const express = require('express');
const router = express.Router();
const controller = require('../../controllers/student_support_office/student_scholarships_controller');

/**
 * @swagger
 * tags:
 *   name: Bolsas Estudantis
 *   description: Gestão de bolsas estudantis
 */

/**
 * @swagger
 * /bolsas:
 *   get:
 *     summary: Lista todas as bolsas estudantis
 *     tags: [Bolsas Estudantis]
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /bolsas/{id}:
 *   get:
 *     summary: Busca uma bolsa por ID
 *     tags: [Bolsas Estudantis]
 */
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /bolsas:
 *   post:
 *     summary: Cria uma nova bolsa estudantil
 *     tags: [Bolsas Estudantis]
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /bolsas/{id}:
 *   put:
 *     summary: Atualiza uma bolsa estudantil
 *     tags: [Bolsas Estudantis]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /bolsas/{id}:
 *   delete:
 *     summary: Remove uma bolsa estudantil
 *     tags: [Bolsas Estudantis]
 */
router.delete('/:id', controller.remover);

module.exports = router;
