'use strict';
const express = require('express');
const router = express.Router();
const AdvertenciaController = require('../../controllers/human_resources/disciplinary_warnings_controller');

/**
 * @swagger
 * tags:
 *   name: Advertencias
 *   description: Gestão de advertências disciplinares dos colaboradores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Advertencia:
 *       type: object
 *       required:
 *         - funcionario_id
 *         - motivo
 *         - data
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da advertência
 *           example: 1
 *         funcionario_id:
 *           type: integer
 *           description: ID do funcionário que recebeu a advertência
 *           example: 23
 *         funcionario_nome:
 *           type: string
 *           description: Nome completo do funcionário
 *           example: Maria dos Santos
 *         motivo:
 *           type: string
 *           description: Motivo da advertência
 *           example: Atrasos recorrentes no expediente
 *         tipo:
 *           type: string
 *           description: Tipo da advertência
 *           enum: [Verbal, Escrita, Grave]
 *           example: Escrita
 *         data:
 *           type: string
 *           format: date
 *           description: Data da advertência
 *           example: 2025-10-17
 *         observacoes:
 *           type: string
 *           description: Detalhes ou observações adicionais
 *           example: Funcionário reconheceu o erro e comprometeu-se a corrigir
 *         criado_em:
 *           type: string
 *           format: date-time
 *           description: Data de criação
 *           example: 2025-10-17T10:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *           example: 2025-10-17T12:30:00Z
 */

/**
 * @swagger
 * /advertencias:
 *   get:
 *     summary: Lista todas as advertências
 *     tags: [Advertencias]
 *     responses:
 *       200:
 *         description: Lista de advertências retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Advertencia'
 */
router.get('/', AdvertenciaController.getAll);

/**
 * @swagger
 * /advertencias/{id}:
 *   get:
 *     summary: Retorna uma advertência pelo ID
 *     tags: [Advertencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da advertência
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Advertência encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Advertencia'
 *       404:
 *         description: Advertência não encontrada
 */
router.get('/:id', AdvertenciaController.getById);

/**
 * @swagger
 * /advertencias:
 *   post:
 *     summary: Cria uma nova advertência
 *     tags: [Advertencias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Advertencia'
 *     responses:
 *       201:
 *         description: Advertência criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Advertencia'
 *       400:
 *         description: Erro de validação dos dados
 */
router.post('/', AdvertenciaController.create);

/**
 * @swagger
 * /advertencias/{id}:
 *   put:
 *     summary: Atualiza uma advertência existente
 *     tags: [Advertencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da advertência a ser atualizada
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Advertencia'
 *     responses:
 *       200:
 *         description: Advertência atualizada com sucesso
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Advertência não encontrada
 */
router.put('/:id', AdvertenciaController.update);

/**
 * @swagger
 * /advertencias/{id}:
 *   delete:
 *     summary: Remove uma advertência
 *     tags: [Advertencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da advertência a ser removida
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Advertência removida com sucesso
 *       404:
 *         description: Advertência não encontrada
 */
router.delete('/:id', AdvertenciaController.delete);

module.exports = router;
