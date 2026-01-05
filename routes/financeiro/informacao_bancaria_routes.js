const controller = require("../../controllers/financeiro/informacao_bancaria_controller");

const express = require('express');
const router = express.Router();
/**
 * @swagger
 * tags:
 *   - name: InformacoesBancarias
 *     description: Dados bancários para unidades/empresa
 */

/**
 * @swagger
 * /api/bancos:
 *   post:
 *     tags: [InformacoesBancarias]
 *     summary: Criar informação bancária
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               unidade_id: { type: integer }
 *               banco_nome: { type: string }
 *               conta: { type: string }
 *               agencia: { type: string }
 *               tipo_conta: { type: string }
 *               titular: { type: string }
 *               iban: { type: string }
 *     responses:
 *       201: { description: Criado }
 */


/**
 * @swagger
 * tags:
 *   name: Mensalidades
 *   description: Gestão das mensalidades
 */

/**
 * @swagger
 * /financeiro/informacao-bancaria:
 *   get:
 *     summary: Lista todas as informacao-bancaria
 *     tags: [informacao-bancaria]
 */
router.get('/', controller.list);

/**
 * @swagger
 * /financeiro/informacao-bancaria/{id}:
 *   get:
 *     summary: Busca uma informacao-bancaria pelo ID
 *     tags: [informacao-bancaria]
 */
router.get('/:id', controller.get);

/**
 * @swagger
 * /financeiro/informacao-bancaria:
 *   post:
 *     summary: Cria uma nova informacao-bancaria
 *     tags: [informacao-bancaria]
 */
router.post('/', controller.create);

/**
 * @swagger
 * /financeiro/informacao-bancaria/{id}:
 *   put:
 *     summary: Atualiza uma informacao-bancaria
 *     tags: [informacao-bancaria]
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /financeiro/informacao-bancaria/{id}:
 *   delete:
 *     summary: Remove uma informacao-bancaria
 *     tags: [informacao-bancaria]
 */
router.delete('/:id', controller.remove);

module.exports = router;
