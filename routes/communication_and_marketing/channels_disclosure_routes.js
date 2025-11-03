const express = require('express');
const canalController = require('../../controllers/communication_and_marketing/channels_disclosure_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Canais de Divulgação
 *   description: API para gestão de canais de divulgação
 */

/**
 * @swagger
 * /api/canais:
 *   get:
 *     summary: Lista todos canais de divulgação
 *     tags: [Canais de Divulgação]
 */
router.get('/all', canalController.findAll);

/**
 * @swagger
 * /api/canais/{id}:
 *   get:
 *     summary: Busca canal por ID
 *     tags: [Canais de Divulgação]
 */
router.get('/getById/:id', canalController.findById);

/**
 * @swagger
 * /api/canais:
 *   post:
 *     summary: Cria novo canal de divulgação
 *     tags: [Canais de Divulgação]
 */
router.post('/create', canalController.create);

/**
 * @swagger
 * /api/canais/{id}:
 *   put:
 *     summary: Atualiza canal existente
 *     tags: [Canais de Divulgação]
 */
router.put('/update/:id', canalController.update);

/**
 * @swagger
 * /api/canais/{id}:
 *   delete:
 *     summary: Remove canal de divulgação
 *     tags: [Canais de Divulgação]
 */
router.delete('/delete/:id', canalController.delete);

module.exports = router;
