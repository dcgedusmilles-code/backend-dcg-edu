'use strict';
const express = require('express');
const router = express.Router();
const oportunidadeController = require('../../controllers/commercial/opportunities_controller');

/**
 * @swagger
 * tags:
 *   name: Oportunidades
 *   description: Gestão de oportunidades comerciais
 */

/**
 * @swagger
 * /oportunidades:
 *   get:
 *     summary: Listar todas as oportunidades
 *     tags: [Oportunidades]
 *     responses:
 *       200:
 *         description: Lista de oportunidades
 */
router.get('/all', oportunidadeController.listar);

/**
 * @swagger
 * /oportunidades/{id}:
 *   get:
 *     summary: Buscar oportunidade por ID
 *     tags: [Oportunidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados da oportunidade
 */
router.get('/getById/:id', oportunidadeController.buscarPorId);

/**
 * @swagger
 * /oportunidades:
 *   post:
 *     summary: Criar nova oportunidade
 *     tags: [Oportunidades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Oportunidade criada
 */
router.post('/create', oportunidadeController.criar);

/**
 * @swagger
 * /oportunidades/{id}:
 *   put:
 *     summary: Atualizar oportunidade
 *     tags: [Oportunidades]
 */
router.put('/update/:id', oportunidadeController.atualizar);

/**
 * @swagger
 * /oportunidades/{id}:
 *   delete:
 *     summary: Remover oportunidade
 *     tags: [Oportunidades]
 */
router.delete('/delete/:id', oportunidadeController.remover);

module.exports = router;
