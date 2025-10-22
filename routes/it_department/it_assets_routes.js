const express = require('express');
const router = express.Router();
const controller = require('../../controllers/it_department/it_assets_controller');

/**
 * @swagger
 * tags:
 *   name: AtivoTI
 *   description: Gestão dos ativos de TI
 */

/**
 * @swagger
 * /api/ativos:
 *   get:
 *     summary: Lista todos os ativos de TI
 *     tags: [AtivoTI]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/ativos/{id}:
 *   get:
 *     summary: Obtém um ativo de TI pelo ID
 *     tags: [AtivoTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ativo encontrado
 *       404:
 *         description: Não encontrado
 */
router.get('/:id', controller.obterPorId);

/**
 * @swagger
 * /api/ativos:
 *   post:
 *     summary: Cria um novo ativo de TI
 *     tags: [AtivoTI]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Ativo criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/ativos/{id}:
 *   put:
 *     summary: Atualiza um ativo existente
 *     tags: [AtivoTI]
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
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/ativos/{id}:
 *   delete:
 *     summary: Remove um ativo de TI
 *     tags: [AtivoTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Excluído com sucesso
 */
router.delete('/:id', controller.remover);

module.exports = router;
