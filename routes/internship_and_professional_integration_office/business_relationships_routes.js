const express = require('express');
const controller = require('../../controllers/internship_and_professional_integration_office/business_relationships_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Relação Empresa
 *   description: Gestão de relações com empresas parceiras
 */

/**
 * @swagger
 * /relacoes:
 *   get:
 *     summary: Lista todas as relações
 *     tags: [Relação Empresa]
 *     responses:
 *       200:
 *         description: Lista de relações
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /relacoes/{id}:
 *   get:
 *     summary: Obter uma relação pelo ID
 *     tags: [Relação Empresa]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da relação
 *     responses:
 *       200:
 *         description: Relação encontrada
 *       404:
 *         description: Não encontrada
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /relacoes:
 *   post:
 *     summary: Criar uma nova relação
 *     tags: [Relação Empresa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_empresa: { type: integer }
 *               tipo: { type: string }
 *               data_inicio: { type: string, format: date }
 *               data_fim: { type: string, format: date }
 *               status: { type: string }
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /relacoes/{id}:
 *   put:
 *     summary: Atualizar relação existente
 *     tags: [Relação Empresa]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Atualizado com sucesso
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /relacoes/{id}:
 *   delete:
 *     summary: Remover uma relação
 *     tags: [Relação Empresa]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Removido com sucesso
 */
router.delete('/:id', controller.remover);

module.exports = router;
