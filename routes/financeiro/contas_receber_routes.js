const express = require('express');
const router = express.Router();
const ContaReceberController = require('../../controllers/financeiro/conta_receber_controller');

/**
 * @swagger
 * tags:
 *   - name: ContasReceber
 *     description: Endpoints para contas a receber
 */

/**
 * @swagger
 * /financeiro/contas-receber:
 *   get:
 *     tags: [ContasReceber]
 *     summary: Lista todas as contas a receber
 */
router.get('/', (req, res) => ContaReceberController.listar(req, res));

/**
 * @swagger
 * /financeiro/contas-receber/{id}:
 *   get:
 *     tags: [ContasReceber]
 *     summary: Obter conta a receber por ID
 */
router.get('/:id', (req, res) => ContaReceberController.obter(req, res));

/**
 * @swagger
 * /financeiro/contas-receber:
 *   post:
 *     tags: [ContasReceber]
 *     summary: Criar conta a receber
 */
router.post('/', (req, res) => ContaReceberController.criar(req, res));

/**
 * @swagger
 * /financeiro/contas-receber/{id}:
 *   put:
 *     tags: [ContasReceber]
 *     summary: Atualizar conta a receber
 */
router.put('/:id', (req, res) => ContaReceberController.atualizar(req, res));

/**
 * @swagger
 * /financeiro/contas-receber/{id}:
 *   delete:
 *     tags: [ContasReceber]
 *     summary: Deletar conta a receber
 */
router.delete('/:id', (req, res) => ContaReceberController.deletar(req, res));

/**
 * @swagger
 * /financeiro/contas-receber/pendentes:
 *   get:
 *     tags: [ContasReceber]
 *     summary: Listar contas a receber pendentes/vencidas
 */
router.get('/pendentes', (req, res) => ContaReceberController.pendentes(req, res));

/**
 * @swagger
 * /financeiro/contas-receber/total-pendentes:
 *   get:
 *     tags: [ContasReceber]
 *     summary: Retorna o total de contas a receber pendentes
 */
router.get('/total-pendentes', (req, res) => ContaReceberController.totalPendentes(req, res));

module.exports = router;
