const express = require('express');
const router = express.Router();
const controller = require('../../controllers/avaliacao_certicacao/feedbacks_controller');

/**
 * @swagger
 * tags:
 *   name: Feedback
 *   description: Gestão de Feedbacks
 */

/**
 * @swagger
 * /feedbacks/all:
 *   get:
 *     summary: Lista todos os feedbacks
 *     tags: [Feedback]
 */
router.get('/all', controller.listar);

/**
 * @swagger
 * /feedbacks/{id}:
 *   get:
 *     summary: Busca um feedback por ID
 *     tags: [Feedback]
 */
router.get('/getById/:id', controller.buscarPorId);

/**
 * @swagger
 * /feedbacks:
 *   post:
 *     summary: Cria um feedback
 *     tags: [Feedback]
 */
router.post('/create', controller.criar);

/**
 * @swagger
 * /feedbacks/{id}:
 *   put:
 *     summary: Atualiza um feedback
 *     tags: [Feedback]
 */
router.put('/update/:id', controller.atualizar);

/**
 * @swagger
 * /feedbacks/{id}:
 *   delete:
 *     summary: Remove um feedback
 *     tags: [Feedback]
 */
router.delete('/delete/:id', controller.remover);

module.exports = router;
