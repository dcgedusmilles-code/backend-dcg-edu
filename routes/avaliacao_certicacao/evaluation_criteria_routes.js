const express = require('express');
const router = express.Router();
const controller = require('../../controllers/avaliacao_certicacao/evaluation_criteria_controller');

/**
 * @swagger
 * tags:
 *   name: Criterios
 *   description: Critérios de avaliação vinculados a uma avaliação
 */

/**
 * @swagger
 * /criterios:
 *   get:
 *     summary: Listar todos os critérios de avaliação
 *     tags: [Criterios]
 */
router.get('/all', controller.listar);

/**
 * @swagger
 * /criterios/{id}:
 *   get:
 *     summary: Obter critério por ID
 *     tags: [Criterios]
 */
router.get('/getById/:id', controller.buscarPorId);

/**
 * @swagger
 * /criterios:
 *   post:
 *     summary: Criar critério de avaliação
 *     tags: [Criterios]
 */
router.post('/create', controller.criar);

/**
 * @swagger
 * /criterios/{id}:
 *   put:
 *     summary: Atualizar critério de avaliação
 *     tags: [Criterios]
 */
router.put('/update/:id', controller.atualizar);

/**
 * @swagger
 * /criterios/{id}:
 *   delete:
 *     summary: Remover critério de avaliação
 *     tags: [Criterios]
 */
router.delete('/delete/:id', controller.remover);

module.exports = router;
