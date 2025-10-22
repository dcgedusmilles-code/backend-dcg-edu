const express = require('express');
const router = express.Router();
const ComissaoController = require('../../controllers/commercial/commissions_controller');

/**
 * @swagger
 * tags:
 *   name: Comissoes
 *   description: Gestão de comissões comerciais e cálculos de remuneração de vendedores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Comissao:
 *       type: object
 *       required:
 *         - vendedorId
 *         - vendaId
 *         - percentual
 *         - valor
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da comissão
 *           example: 1
 *         vendedorId:
 *           type: integer
 *           description: ID do vendedor associado à comissão
 *           example: 101
 *         vendaId:
 *           type: integer
 *           description: ID da venda referente à comissão
 *           example: 5001
 *         percentual:
 *           type: number
 *           description: Percentual aplicado sobre o valor da venda
 *           example: 5.5
 *         valor:
 *           type: number
 *           description: Valor monetário da comissão
 *           example: 275.50
 *         status:
 *           type: string
 *           description: Status da comissão (pendente, paga, cancelada)
 *           example: paga
 *         criado_em:
 *           type: string
 *           format: date-time
 *           description: Data de criação da comissão
 *           example: 2025-10-17T12:00:00Z
 *         atualizado_em:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *           example: 2025-10-18T08:30:00Z
 */

/**
 * @swagger
 * /comissoes:
 *   get:
 *     summary: Lista todas as comissões
 *     tags: [Comissoes]
 *     responses:
 *       200:
 *         description: Lista de comissões retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comissao'
 */

/**
 * @swagger
 * /comissoes/{id}:
 *   get:
 *     summary: Obtém uma comissão pelo ID
 *     tags: [Comissoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da comissão
 *     responses:
 *       200:
 *         description: Comissão encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comissao'
 *       404:
 *         description: Comissão não encontrada
 */

/**
 * @swagger
 * /comissoes:
 *   post:
 *     summary: Cria uma nova comissão
 *     tags: [Comissoes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comissao'
 *     responses:
 *       201:
 *         description: Comissão criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comissao'
 *       400:
 *         description: Erro ao criar a comissão
 */

/**
 * @swagger
 * /comissoes/{id}:
 *   put:
 *     summary: Atualiza uma comissão existente
 *     tags: [Comissoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da comissão
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comissao'
 *     responses:
 *       200:
 *         description: Comissão atualizada com sucesso
 *       404:
 *         description: Comissão não encontrada
 *       400:
 *         description: Erro ao atualizar a comissão
 */

/**
 * @swagger
 * /comissoes/{id}:
 *   delete:
 *     summary: Exclui uma comissão
 *     tags: [Comissoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da comissão
 *     responses:
 *       200:
 *         description: Comissão excluída com sucesso
 *       404:
 *         description: Comissão não encontrada
 */



    router.post('/comissoes', ComissaoController.criar);
    router.get('/comissoes', ComissaoController.listar);
    router.get('/comissoes/:id', ComissaoController.buscarPorId);
    router.put('/comissoes/:id', ComissaoController.atualizar);
    router.delete('/comissoes/:id', ComissaoController.remover);

module.exports = router;
