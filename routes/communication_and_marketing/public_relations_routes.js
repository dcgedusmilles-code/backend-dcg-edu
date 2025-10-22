'use strict';
const express = require('express');
const router = express.Router();
const relacaoPublicaController = require('../../controllers/communication_and_marketing/public_relations_controlles');

/**
 * @swagger
 * tags:
 *   name: Relações Públicas
 *   description: Gestão de contatos e instituições de RP
 */

/**
 * @swagger
 * /api/relacoes-publicas:
 *   post:
 *     summary: Criar nova relação pública
 *     tags: [Relações Públicas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_contato:
 *                 type: string
 *               instituicao:
 *                 type: string
 *               cargo:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email:
 *                 type: string
 *               observacoes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Relação pública criada
 */
router.post('/', relacaoPublicaController.create);

/**
 * @swagger
 * /api/relacoes-publicas:
 *   get:
 *     summary: Listar todas as relações públicas
 *     tags: [Relações Públicas]
 *     responses:
 *       200:
 *         description: Lista retornada
 */
router.get('/', relacaoPublicaController.getAll);

/**
 * @swagger
 * /api/relacoes-publicas/{id}:
 *   get:
 *     summary: Buscar relação pública por ID
 *     tags: [Relações Públicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Encontrada
 *       404:
 *         description: Não encontrada
 */
router.get('/:id', relacaoPublicaController.getById);

/**
 * @swagger
 * /api/relacoes-publicas/{id}:
 *   put:
 *     summary: Atualizar relação pública
 *     tags: [Relações Públicas]
 *     parameters:
 *       - in: path
 *         name: id
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
 *         description: Atualizada
 *       404:
 *         description: Não encontrada
 */
router.put('/:id', relacaoPublicaController.update);

/**
 * @swagger
 * /api/relacoes-publicas/{id}:
 *   delete:
 *     summary: Deletar relação pública
 *     tags: [Relações Públicas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Removida
 *       404:
 *         description: Não encontrada
 */
router.delete('/:id', relacaoPublicaController.delete);

module.exports = router;
