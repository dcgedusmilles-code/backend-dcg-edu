'use strict';
const express = require('express');
const router = express.Router();
const BeneficioController = require('../../controllers/human_resources/benefits_controller');

/**
 * @swagger
 * tags:
 *   name: Beneficios
 *   description: Gestão de benefícios oferecidos aos funcionários
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Beneficio:
 *       type: object
 *       required:
 *         - nome
 *         - tipo
 *         - valor
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do benefício
 *           example: 1
 *         nome:
 *           type: string
 *           description: Nome do benefício
 *           example: Plano de Saúde
 *         tipo:
 *           type: string
 *           description: Categoria do benefício
 *           example: Saúde
 *         valor:
 *           type: number
 *           format: float
 *           description: Valor mensal do benefício
 *           example: 450.75
 *         descricao:
 *           type: string
 *           description: Detalhes adicionais sobre o benefício
 *           example: Cobertura total para dependentes diretos
 *         ativo:
 *           type: boolean
 *           description: Indica se o benefício está ativo
 *           example: true
 *         criado_em:
 *           type: string
 *           format: date-time
 *           description: Data de criação
 *           example: 2025-10-17T10:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           description: Última atualização
 *           example: 2025-10-17T12:00:00Z
 */

/**
 * @swagger
 * /beneficios:
 *   get:
 *     summary: Lista todos os benefícios cadastrados
 *     tags: [Beneficios]
 *     responses:
 *       200:
 *         description: Lista de benefícios retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Beneficio'
 */
router.get('/', BeneficioController.getAll);

/**
 * @swagger
 * /beneficios/{id}:
 *   get:
 *     summary: Obtém um benefício pelo ID
 *     tags: [Beneficios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do benefício
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Benefício encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Beneficio'
 *       404:
 *         description: Benefício não encontrado
 */
router.get('/:id', BeneficioController.getById);

/**
 * @swagger
 * /beneficios:
 *   post:
 *     summary: Cria um novo benefício
 *     tags: [Beneficios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Beneficio'
 *     responses:
 *       201:
 *         description: Benefício criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Beneficio'
 *       400:
 *         description: Erro de validação ou dados incorretos
 */
router.post('/', BeneficioController.create);

/**
 * @swagger
 * /beneficios/{id}:
 *   put:
 *     summary: Atualiza um benefício existente
 *     tags: [Beneficios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do benefício a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Beneficio'
 *     responses:
 *       200:
 *         description: Benefício atualizado com sucesso
 *       404:
 *         description: Benefício não encontrado
 *       400:
 *         description: Erro de validação
 */
router.put('/:id', BeneficioController.update);

/**
 * @swagger
 * /beneficios/{id}:
 *   delete:
 *     summary: Remove um benefício pelo ID
 *     tags: [Beneficios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do benefício a ser removido
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Benefício removido com sucesso
 *       404:
 *         description: Benefício não encontrado
 */
router.delete('/:id', BeneficioController.delete);

module.exports = router;
