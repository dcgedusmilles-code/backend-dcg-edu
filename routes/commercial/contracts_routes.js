const express = require('express');
const router = express.Router();
const ContratoController = require('../../controllers/commercial/clients_controller');

/**
 * @swagger
 * tags:
 *   name: Contratos
 *   description: Gestão de contratos comerciais e relacionamento com clientes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Contrato:
 *       type: object
 *       required:
 *         - id_cliente
 *         - numero_contrato
 *         - valor_total
 *         - data_inicio
 *         - id_responsavel
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do contrato
 *           example: 1
 *         id_cliente:
 *           type: integer
 *           description: ID do cliente associado
 *           example: 25
 *         numero_contrato:
 *           type: string
 *           description: Número único do contrato
 *           example: CT-2025-001
 *         descricao:
 *           type: string
 *           description: Descrição detalhada do contrato
 *           example: Contrato de prestação de serviços de consultoria
 *         valor_total:
 *           type: number
 *           format: float
 *           description: Valor total do contrato
 *           example: 15000.50
 *         data_inicio:
 *           type: string
 *           format: date-time
 *           description: Data de início do contrato
 *           example: 2025-01-10T00:00:00Z
 *         data_fim:
 *           type: string
 *           format: date-time
 *           description: Data de término do contrato
 *           example: 2025-12-31T00:00:00Z
 *         status:
 *           type: string
 *           description: Status atual do contrato
 *           example: ativo
 *         id_responsavel:
 *           type: integer
 *           description: ID do funcionário responsável
 *           example: 8
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação do contrato
 *           example: 2025-10-17T12:00:00Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização do contrato
 *           example: 2025-10-18T08:30:00Z
 */

/**
 * @swagger
 * /contratos:
 *   get:
 *     summary: Lista todos os contratos
 *     tags: [Contratos]
 *     responses:
 *       200:
 *         description: Lista de contratos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contrato'
 */

/**
 * @swagger
 * /contratos/{id}:
 *   get:
 *     summary: Obtém um contrato pelo ID
 *     tags: [Contratos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do contrato
 *     responses:
 *       200:
 *         description: Contrato encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contrato'
 *       404:
 *         description: Contrato não encontrado
 */

/**
 * @swagger
 * /contratos:
 *   post:
 *     summary: Cria um novo contrato
 *     tags: [Contratos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contrato'
 *     responses:
 *       201:
 *         description: Contrato criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contrato'
 *       400:
 *         description: Erro ao criar o contrato
 */

/**
 * @swagger
 * /contratos/{id}:
 *   put:
 *     summary: Atualiza um contrato existente
 *     tags: [Contratos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do contrato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contrato'
 *     responses:
 *       200:
 *         description: Contrato atualizado com sucesso
 *       404:
 *         description: Contrato não encontrado
 *       400:
 *         description: Erro ao atualizar o contrato
 */

/**
 * @swagger
 * /contratos/{id}:
 *   delete:
 *     summary: Exclui um contrato existente
 *     tags: [Contratos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do contrato
 *     responses:
 *       200:
 *         description: Contrato excluído com sucesso
 *       404:
 *         description: Contrato não encontrado
 */

router.post('/contratos', ContratoController.criar);
router.get('/contratos', ContratoController.listar);
router.get('/contratos/:id', ContratoController.buscarPorId);
router.put('/contratos/:id', ContratoController.atualizar);
router.delete('/contratos/:id', ContratoController.remover);

module.exports = router;
