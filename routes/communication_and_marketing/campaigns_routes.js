const express = require('express');
const campanhaController = require('../../controllers/communication_and_marketing/campaigns_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Campanhas
 *   description: API de campanhas de marketing
 */

/**
 * @swagger
 * /api/campanhas:
 *   get:
 *     summary: Lista todas campanhas
 *     tags: [Campanhas]
 */
router.get('/all', campanhaController.findAll);

/**
 * @swagger
 * /api/campanhas/{id}:
 *   get:
 *     summary: Busca campanha por ID
 *     tags: [Campanhas]
 */
router.get('/getById/:id', campanhaController.findById);

/**
 * @swagger
 * /api/campanhas:
 *   post:
 *     summary: Cria nova campanha
 *     tags: [Campanhas]
 */
router.post('/create', campanhaController.create);

/**
 * @swagger
 * /api/campanhas/{id}:
 *   put:
 *     summary: Atualiza campanha existente
 *     tags: [Campanhas]
 */
router.put('/update/:id', campanhaController.update);

/**
 * @swagger
 * /api/campanhas/{id}:
 *   delete:
 *     summary: Remove campanha
 *     tags: [Campanhas]
 */
router.delete('/delete/:id', campanhaController.delete);

module.exports = router;
