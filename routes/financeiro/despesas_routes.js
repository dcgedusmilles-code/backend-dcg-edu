const express = require('express');
const router = express.Router();
const DespesaController = require('../../controllers/financeiro/despesa_controller');

/**
 * @swagger
 * tags:
 *   - name: Despesas
 *     description: Endpoints para gestão de despesas
 */

/**
 * @swagger
 * /financeiro/despesas:
 *   get:
 *     tags: [Despesas]
 *     summary: Lista todas as despesas
 *     responses:
 *       200:
 *         description: Lista de despesas
 */
router.get('/', (req, res) => DespesaController.listar(req, res));

/**
 * @swagger
 * /financeiro/despesas/{id}:
 *   get:
 *     tags: [Despesas]
 *     summary: Obter uma despesa por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *     responses:
 *       200:
 *         description: Encontrado
 *       404:
 *         description: Não encontrada
 */
router.get('/:id', (req, res) => DespesaController.obter(req, res));

/**
 * @swagger
 * /financeiro/despesas:
 *   post:
 *     tags: [Despesas]
 *     summary: Criar despesa
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Criado
 */
router.post('/', (req, res) => DespesaController.criar(req, res));

/**
 * @swagger
 * /financeiro/despesas/{id}:
 *   put:
 *     tags: [Despesas]
 *     summary: Atualizar despesa
 */
router.put('/:id', (req, res) => DespesaController.atualizar(req, res));

/**
 * @swagger
 * /financeiro/despesas/{id}:
 *   delete:
 *     tags: [Despesas]
 *     summary: Deletar despesa
 */
router.delete('/:id', (req, res) => DespesaController.deletar(req, res));

/**
 * @swagger
 * /financeiro/despesas/total:
 *   get:
 *     tags: [Despesas]
 *     summary: Retorna o total de despesas num período
 *     parameters:
 *       - in: query
 *         name: periodo_inicio
 *         schema: { type: string, format: date }
 *       - in: query
 *         name: periodo_fim
 *         schema: { type: string, format: date }
 */
router.get('/total', (req, res) => DespesaController.totalPeriodo(req, res));

module.exports = router;
