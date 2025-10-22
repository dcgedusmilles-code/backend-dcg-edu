const express = require('express');
const router = express.Router();
const controller = require('../../controllers/commercial/commercial_goals_controller');

/**
 * @swagger
 * tags:
 *   name: MetaComercial
 *   description: Gestão de metas comerciais
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     MetaComercial:
 *       type: object
 *       required:
 *         - nome_meta
 *         - valor_meta
 *         - periodo
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da meta comercial
 *           example: 1
 *         nome_meta:
 *           type: string
 *           description: Nome da meta comercial
 *           example: "Meta de Vendas Outubro"
 *         descricao:
 *           type: string
 *           description: Descrição detalhada da meta
 *           example: "Atingir 100.000 Kz em vendas no mês de outubro."
 *         valor_meta:
 *           type: number
 *           description: Valor objetivo da meta
 *           example: 100000
 *         valor_alcancado:
 *           type: number
 *           description: Valor já alcançado até o momento
 *           example: 45000
 *         periodo:
 *           type: string
 *           description: Período de validade da meta
 *           example: "Mensal"
 *         status:
 *           type: string
 *           description: Estado atual da meta (ex: ativa, concluída, cancelada)
 *           example: "Ativa"
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2025-10-09T12:00:00Z"
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: "2025-10-09T14:00:00Z"
 */

/**
 * @swagger
 * /metas/all:
 *   get:
 *     summary: Lista todas as metas comerciais
 *     tags: [MetaComercial]
 *     responses:
 *       200:
 *         description: Lista de metas comerciais retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MetaComercial'
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /metas/create:
 *   post:
 *     summary: Cria uma nova meta comercial
 *     tags: [MetaComercial]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MetaComercial'
 *     responses:
 *       201:
 *         description: Meta criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MetaComercial'
 *       400:
 *         description: Dados inválidos fornecidos
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /metas/getById/{id}:
 *   get:
 *     summary: Obtém uma meta comercial pelo ID
 *     tags: [MetaComercial]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da meta comercial
 *     responses:
 *       200:
 *         description: Meta encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MetaComercial'
 *       404:
 *         description: Meta não encontrada
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /metas/update/{id}:
 *   put:
 *     summary: Atualiza uma meta comercial existente
 *     tags: [MetaComercial]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da meta comercial
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MetaComercial'
 *     responses:
 *       200:
 *         description: Meta atualizada com sucesso
 *       400:
 *         description: Dados inválidos fornecidos
 *       404:
 *         description: Meta não encontrada
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /metas/delete/{id}:
 *   delete:
 *     summary: Exclui uma meta comercial
 *     tags: [MetaComercial]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da meta comercial a ser excluída
 *     responses:
 *       200:
 *         description: Meta excluída com sucesso
 *       404:
 *         description: Meta não encontrada
 *       500:
 *         description: Erro interno do servidor
 */

router.get('/all', controller.listar);
router.post('/create', controller.criar);
router.get('/getById/:id', controller.buscarPorId);
router.put('/update/:id', controller.atualizar);
router.delete('/delete/:id', controller.remover);

module.exports = router;
