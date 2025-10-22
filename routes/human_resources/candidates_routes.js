'use strict';
const express = require('express');
const router = express.Router();
const CandidatoController = require('../../controllers/human_resources/candidates_controller');

/**
 * @swagger
 * tags:
 *   name: Candidatos
 *   description: Gestão de candidatos em processos seletivos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Candidato:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - telefone
 *         - vaga_aplicada
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do candidato
 *           example: 1
 *         nome:
 *           type: string
 *           description: Nome completo do candidato
 *           example: João da Silva
 *         email:
 *           type: string
 *           description: E-mail de contato
 *           example: joaosilva@email.com
 *         telefone:
 *           type: string
 *           description: Telefone de contato
 *           example: "+244 923 456 789"
 *         vaga_aplicada:
 *           type: string
 *           description: Nome ou código da vaga aplicada
 *           example: Desenvolvedor Backend
 *         status:
 *           type: string
 *           description: Situação atual do candidato no processo seletivo
 *           example: Em análise
 *         data_candidatura:
 *           type: string
 *           format: date
 *           description: Data da candidatura
 *           example: 2025-10-15
 *         observacoes:
 *           type: string
 *           description: Notas adicionais sobre o candidato
 *           example: Boa comunicação e experiência prévia em Node.js
 *         criado_em:
 *           type: string
 *           format: date-time
 *           description: Data de criação
 *           example: 2025-10-17T10:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           description: Última atualização
 *           example: 2025-10-17T12:30:00Z
 */

/**
 * @swagger
 * /candidatos:
 *   get:
 *     summary: Lista todos os candidatos
 *     tags: [Candidatos]
 *     responses:
 *       200:
 *         description: Lista de candidatos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Candidato'
 */
router.get('/', CandidatoController.getAll);

/**
 * @swagger
 * /candidatos/{id}:
 *   get:
 *     summary: Busca um candidato pelo ID
 *     tags: [Candidatos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do candidato
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Candidato encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Candidato'
 *       404:
 *         description: Candidato não encontrado
 */
router.get('/:id', CandidatoController.getById);

/**
 * @swagger
 * /candidatos:
 *   post:
 *     summary: Cria um novo candidato
 *     tags: [Candidatos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Candidato'
 *     responses:
 *       201:
 *         description: Candidato criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Candidato'
 *       400:
 *         description: Erro de validação ou dados incorretos
 */
router.post('/', CandidatoController.create);

/**
 * @swagger
 * /candidatos/{id}:
 *   put:
 *     summary: Atualiza os dados de um candidato existente
 *     tags: [Candidatos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do candidato a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Candidato'
 *     responses:
 *       200:
 *         description: Candidato atualizado com sucesso
 *       404:
 *         description: Candidato não encontrado
 *       400:
 *         description: Erro de validação
 */
router.put('/:id', CandidatoController.update);

/**
 * @swagger
 * /candidatos/{id}:
 *   delete:
 *     summary: Remove um candidato pelo ID
 *     tags: [Candidatos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do candidato a ser removido
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Candidato removido com sucesso
 *       404:
 *         description: Candidato não encontrado
 */
router.delete('/:id', CandidatoController.delete);

module.exports = router;
