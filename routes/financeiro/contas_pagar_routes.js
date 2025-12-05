const express = require('express');
const router = express.Router();
const ContaPagarController = require('../../controllers/financeiro/conta_pagar_controller');

/**
 * @swagger
 * tags:
 *   - name: ContasPagar
 *     description: Endpoints para contas a pagar
 */

/**
 * @swagger
 * /financeiro/contas-pagar:
 *   get:
 *     tags: [ContasPagar]
 *     summary: Lista todas as contas a pagar
 */
router.get('/', (req, res) => ContaPagarController.listar(req, res));

/**
 * @swagger
 * /financeiro/contas-pagar/{id}:
 *   get:
 *     tags: [ContasPagar]
 *     summary: Obter conta a pagar por ID
 */
router.get('/:id', (req, res) => ContaPagarController.obter(req, res));

/**
 * @swagger
 * /financeiro/contas-pagar:
 *   post:
 *     tags: [ContasPagar]
 *     summary: Criar conta a pagar
 */
router.post('/', (req, res) => ContaPagarController.criar(req, res));

/**
 * @swagger
 * /financeiro/contas-pagar/{id}:
 *   put:
 *     tags: [ContasPagar]
 *     summary: Atualizar conta a pagar
 */
router.put('/:id', (req, res) => ContaPagarController.atualizar(req, res));

/**
 * @swagger
 * /financeiro/contas-pagar/{id}:
 *   delete:
 *     tags: [ContasPagar]
 *     summary: Deletar conta a pagar
 */
router.delete('/:id', (req, res) => ContaPagarController.deletar(req, res));

/**
 * @swagger
 * /financeiro/contas-pagar/pendentes:
 *   get:
 *     tags: [ContasPagar]
 *     summary: Listar contas a pagar pendentes/vencidas
 */
router.get('/pendentes', (req, res) => ContaPagarController.pendentes(req, res));

/**
 * @swagger
 * /financeiro/contas-pagar/total-pendentes:
 *   get:
 *     tags: [ContasPagar]
 *     summary: Retorna o total de contas a pagar pendentes
 */
router.get('/total-pendentes', (req, res) => ContaPagarController.totalPendentes(req, res));

module.exports = router;
