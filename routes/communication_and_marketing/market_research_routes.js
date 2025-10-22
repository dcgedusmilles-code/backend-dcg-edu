'use strict';
const express = require('express');
const router = express.Router();
const pesquisaMercadoController = require('../../controllers/communication_and_marketing/market_research_controller');

/**
 * @swagger
 * tags:
 *   name: Pesquisas de Mercado
 *   description: Gerenciamento de pesquisas de mercado, estudos e análises de público-alvo
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PesquisaMercado:
 *       type: object
 *       required:
 *         - titulo
 *         - publico_alvo
 *         - data_inicio
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único da pesquisa
 *           example: 1
 *         titulo:
 *           type: string
 *           description: Título ou nome da pesquisa de mercado
 *           example: Satisfação dos Alunos - 2025
 *         descricao:
 *           type: string
 *           description: Descrição detalhada sobre a pesquisa
 *           example: Estudo para medir a satisfação dos alunos com os serviços da instituição.
 *         publico_alvo:
 *           type: string
 *           description: Grupo de pessoas que serão alvo da pesquisa
 *           example: Estudantes de graduação
 *         metodologia:
 *           type: string
 *           description: Tipo de metodologia utilizada (quantitativa, qualitativa, mista, etc.)
 *           example: Pesquisa quantitativa com questionário online
 *         data_inicio:
 *           type: string
 *           format: date-time
 *           description: Data de início da pesquisa
 *           example: 2025-09-01T08:00:00Z
 *         data_fim:
 *           type: string
 *           format: date-time
 *           description: Data de término da pesquisa
 *           example: 2025-09-15T18:00:00Z
 *         responsavel:
 *           type: string
 *           description: Nome do responsável pela pesquisa
 *           example: João Pereira
 *         status:
 *           type: string
 *           description: Status atual da pesquisa (planejada, em andamento, concluída)
 *           example: em andamento
 *         resultados:
 *           type: string
 *           description: Resumo dos resultados obtidos (opcional)
 *           example: 85% dos alunos estão satisfeitos com os serviços acadêmicos.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do registro
 *           example: 2025-08-20T10:00:00Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 *           example: 2025-09-10T16:00:00Z
 */

/**
 * @swagger
 * /pesquisas-mercado:
 *   get:
 *     summary: Lista todas as pesquisas de mercado cadastradas
 *     tags: [Pesquisas de Mercado]
 *     responses:
 *       200:
 *         description: Lista de pesquisas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PesquisaMercado'
 */

/**
 * @swagger
 * /pesquisas-mercado/{id}:
 *   get:
 *     summary: Obtém os detalhes de uma pesquisa de mercado pelo ID
 *     tags: [Pesquisas de Mercado]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pesquisa a ser buscada
 *     responses:
 *       200:
 *         description: Pesquisa encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PesquisaMercado'
 *       404:
 *         description: Pesquisa não encontrada
 */

/**
 * @swagger
 * /pesquisas-mercado:
 *   post:
 *     summary: Cria uma nova pesquisa de mercado
 *     tags: [Pesquisas de Mercado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PesquisaMercado'
 *     responses:
 *       201:
 *         description: Pesquisa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PesquisaMercado'
 *       400:
 *         description: Erro ao criar a pesquisa
 */

/**
 * @swagger
 * /pesquisas-mercado/{id}:
 *   put:
 *     summary: Atualiza as informações de uma pesquisa existente
 *     tags: [Pesquisas de Mercado]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pesquisa a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PesquisaMercado'
 *     responses:
 *       200:
 *         description: Pesquisa atualizada com sucesso
 *       400:
 *         description: Erro ao atualizar a pesquisa
 *       404:
 *         description: Pesquisa não encontrada
 */

/**
 * @swagger
 * /pesquisas-mercado/{id}:
 *   delete:
 *     summary: Remove uma pesquisa de mercado pelo ID
 *     tags: [Pesquisas de Mercado]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pesquisa a ser removida
 *     responses:
 *       204:
 *         description: Pesquisa removida com sucesso
 *       404:
 *         description: Pesquisa não encontrada
 */

router.post('/pesquisas-mercado', pesquisaMercadoController.create);
router.get('/pesquisas-mercado', pesquisaMercadoController.getAll);
router.get('/pesquisas-mercado/:id', pesquisaMercadoController.getById);
router.put('/pesquisas-mercado/:id', pesquisaMercadoController.update);
router.delete('/pesquisas-mercado/:id', pesquisaMercadoController.delete);

module.exports = router;
