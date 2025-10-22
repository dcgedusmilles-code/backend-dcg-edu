'use strict';
const express = require('express');
const router = express.Router();
const parceriaController = require('../../controllers/communication_and_marketing/partnerships_controller');

/**
 * @swagger
 * tags:
 *   name: Parcerias
 *   description: Gestão de parcerias estratégicas
 */

/**
 * @swagger
 * /api/parcerias:
 *   post:
 *     summary: Criar uma nova parceria
 *     tags: [Parcerias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_parceiro:
 *                 type: string
 *               tipo:
 *                 type: string
 *               contato:
 *                 type: string
 *               descricao:
 *                 type: string
 *               beneficios_oferecidos:
 *                 type: string
 *               beneficios_recebidos:
 *                 type: string
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               data_fim:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Parceria criada com sucesso
 */
router.post('/', parceriaController.create);

/**
 * @swagger
 * /api/parcerias:
 *   get:
 *     summary: Listar todas as parcerias
 *     tags: [Parcerias]
 *     responses:
 *       200:
 *         description: Lista de parcerias retornada
 */
router.get('/', parceriaController.getAll);

/**
 * @swagger
 * /api/parcerias/{id}:
 *   get:
 *     summary: Buscar parceria por ID
 *     tags: [Parcerias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Parceria encontrada
 *       404:
 *         description: Não encontrada
 */
router.get('/:id', parceriaController.getById);

/**
 * @swagger
 * /api/parcerias/{id}:
 *   put:
 *     summary: Atualizar parceria
 *     tags: [Parcerias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Parceria atualizada
 *       404:
 *         description: Não encontrada
 */
router.put('/:id', parceriaController.update);

/**
 * @swagger
 * /api/parcerias/{id}:
 *   delete:
 *     summary: Deletar parceria
 *     tags: [Parcerias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Parceria removida
 *       404:
 *         description: Não encontrada
 */
router.delete('/:id', parceriaController.delete);

module.exports = router;
