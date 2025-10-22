const express = require('express');
const router = express.Router();
const contaSistemaController = require('../../controllers/it_department/accounts_systems_controller');

/**
 * @swagger
 * tags:
 *   name: Contas do Sistema
 *   description: Gestão de contas de sistemas para usuários de TI
 */

/**
 * @swagger
 * /contas:
 *   get:
 *     summary: Lista todas as contas do sistema
 *     tags: [Contas do Sistema]
 *     responses:
 *       200:
 *         description: Lista de contas retornada com sucesso
 */
router.get('/', contaSistemaController.listar);

/**
 * @swagger
 * /contas/{id}:
 *   get:
 *     summary: Obtém detalhes de uma conta do sistema
 *     tags: [Contas do Sistema]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Detalhes da conta retornados
 *       404:
 *         description: Conta não encontrada
 */
router.get('/:id', contaSistemaController.obterPorId);

/**
 * @swagger
 * /contas:
 *   post:
 *     summary: Cria uma nova conta do sistema
 *     tags: [Contas do Sistema]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario_id:
 *                 type: integer
 *               sistema:
 *                 type: string
 *               username:
 *                 type: string
 *               senha_hash:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Conta criada com sucesso
 */
router.post('/', contaSistemaController.criar);

/**
 * @swagger
 * /contas/{id}:
 *   put:
 *     summary: Atualiza uma conta do sistema
 *     tags: [Contas do Sistema]
 */
router.put('/:id', contaSistemaController.atualizar);

/**
 * @swagger
 * /contas/{id}:
 *   delete:
 *     summary: Exclui uma conta do sistema
 *     tags: [Contas do Sistema]
 */
router.delete('/:id', contaSistemaController.excluir);

module.exports = router;
