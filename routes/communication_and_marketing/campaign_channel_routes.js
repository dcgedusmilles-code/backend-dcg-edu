'use strict';
const express = require('express');
const router = express.Router();
const campanhaCanalController = require('../../controllers/communication_and_marketing/campaign_channel_controller');

/**
 * @swagger
 * tags:
 *   name: CampanhaCanais
 *   description: Gestão de Campanhas e Canais
 */

/**
 * @swagger
 * /campanha-canais:
 *   get:
 *     summary: Listar todas as campanhas-canais
 *     tags: [CampanhaCanais]
 *     responses:
 *       200:
 *         description: Lista de campanhas-canais
 */
router.get('/', campanhaCanalController.findAll);

/**
 * @swagger
 * /campanha-canais/{id}:
 *   get:
 *     summary: Buscar campanha-canal por ID
 *     tags: [CampanhaCanais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados da campanha-canal
 */
router.get('/:id', campanhaCanalController.findById);

/**
 * @swagger
 * /campanha-canais:
 *   post:
 *     summary: Criar novo vínculo de campanha com canal
 *     tags: [CampanhaCanais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_campanha:
 *                 type: integer
 *               id_canal:
 *                 type: integer
 *               custo:
 *                 type: number
 *               resultado_medido:
 *                 type: string
 *     responses:
 *       201:
 *         description: Campanha-canal criada
 */
router.post('/', campanhaCanalController.create);

/**
 * @swagger
 * /campanha-canais/{id}:
 *   put:
 *     summary: Atualizar vínculo de campanha com canal
 *     tags: [CampanhaCanais]
 */
router.put('/:id', campanhaCanalController.update);

/**
 * @swagger
 * /campanha-canais/{id}:
 *   delete:
 *     summary: Remover vínculo de campanha com canal
 *     tags: [CampanhaCanais]
 */
router.delete('/:id', campanhaCanalController.delete);

module.exports = router;
