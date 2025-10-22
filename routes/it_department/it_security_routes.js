const express = require('express');
const router = express.Router();
const controller = require('../../controllers/it_department/it_security_controller');

/**
 * @swagger
 * tags:
 *   name: SegurancaTI
 *   description: Gestão das medidas e políticas de segurança de TI
 */

/**
 * @swagger
 * /seguranca:
 *   get:
 *     summary: Lista todas as medidas de segurança de TI
 *     tags: [SegurancaTI]
 *     responses:
 *       200:
 *         description: Lista de medidas
 */
router.get('/seguranca', controller.listar);

/**
 * @swagger
 * /seguranca/{id}:
 *   get:
 *     summary: Retorna uma medida de segurança específica
 *     tags: [SegurancaTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Medida encontrada
 *       404:
 *         description: Não encontrada
 */
router.get('/seguranca/:id', controller.buscarPorId);

/**
 * @swagger
 * /seguranca:
 *   post:
 *     summary: Cria uma nova medida de segurança
 *     tags: [SegurancaTI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SegurancaTI'
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/seguranca', controller.criar);

/**
 * @swagger
 * /seguranca/{id}:
 *   put:
 *     summary: Atualiza uma medida existente
 *     tags: [SegurancaTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Atualizado com sucesso
 *       404:
 *         description: Não encontrado
 */
router.put('/seguranca/:id', controller.atualizar);

/**
 * @swagger
 * /seguranca/{id}:
 *   delete:
 *     summary: Remove uma medida de segurança
 *     tags: [SegurancaTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Excluído com sucesso
 */
router.delete('/seguranca/:id', controller.deletar);

module.exports = router;
