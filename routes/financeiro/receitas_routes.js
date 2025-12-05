const express = require('express');
const router = express.Router();
const ReceitaController = require('../../controllers/financeiro/receita_controller');

/**
 * @swagger
 * tags:
 *   - name: Receitas
 *     description: Endpoints para gestão de receitas
 */

/**
 * @swagger
 * /financeiro/receitas:
 *   get:
 *     tags: [Receitas]
 *     summary: Lista todas as receitas
 *     responses:
 *       200:
 *         description: Lista de receitas
 */
router.get('/', (req, res) => ReceitaController.listar(req, res));

/**
 * @swagger
 * /financeiro/receitas/{id}:
 *   get:
 *     tags: [Receitas]
 *     summary: Obter uma receita por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Receita encontrada
 *       404:
 *         description: Não encontrada
 */
router.get('/:id', (req, res) => ReceitaController.obter(req, res));

/**
 * @swagger
 * /financeiro/receitas:
 *   post:
 *     tags: [Receitas]
 *     summary: Criar uma nova receita
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao: { type: string }
 *               categoria: { type: string }
 *               valor: { type: number }
 *               data_recebimento: { type: string, format: date }
 *               status: { type: string }
 *               cliente_id: { type: integer }
 *               unidade_id: { type: integer }
 *               curso_id: { type: integer }
 *     responses:
 *       201:
 *         description: Criado
 */
router.post('/', (req, res) => ReceitaController.criar(req, res));

/**
 * @swagger
 * /financeiro/receitas/{id}:
 *   put:
 *     tags: [Receitas]
 *     summary: Atualizar uma receita
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: { type: object }
 *     responses:
 *       200:
 *         description: Atualizado
 */
router.put('/:id', (req, res) => ReceitaController.atualizar(req, res));

/**
 * @swagger
 * /financeiro/receitas/{id}:
 *   delete:
 *     tags: [Receitas]
 *     summary: Deleta uma receita
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Deletado
 */
router.delete('/:id', (req, res) => ReceitaController.deletar(req, res));

/**
 * @swagger
 * /financeiro/receitas/total:
 *   get:
 *     tags: [Receitas]
 *     summary: Retorna o total de receitas num período
 *     parameters:
 *       - in: query
 *         name: periodo_inicio
 *         schema: { type: string, format: date }
 *       - in: query
 *         name: periodo_fim
 *         schema: { type: string, format: date }
 *     responses:
 *       200:
 *         description: Total retornado
 */
router.get('/total', (req, res) => ReceitaController.totalPeriodo(req, res));

module.exports = router;
