const express = require('express');
const router = express.Router();
const controller = require('../../controllers/it_department/it_maintenance_controller');

/**
 * @swagger
 * tags:
 *   name: ManutencaoTI
 *   description: Gestão das manutenções de TI
 */

/**
 * @swagger
 * /api/manutencoes:
 *   get:
 *     summary: Lista todas as manutenções de TI
 *     tags: [ManutencaoTI]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/manutencoes/{id}:
 *   get:
 *     summary: Obtém uma manutenção de TI pelo ID
 *     tags: [ManutencaoTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Manutenção encontrada
 *       404:
 *         description: Não encontrada
 */
router.get('/:id', controller.obterPorId);

/**
 * @swagger
 * /api/manutencoes:
 *   post:
 *     summary: Cria uma nova manutenção de TI
 *     tags: [ManutencaoTI]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Criada com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/manutencoes/{id}:
 *   put:
 *     summary: Atualiza uma manutenção existente
 *     tags: [ManutencaoTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Atualizada com sucesso
 *       404:
 *         description: Não encontrada
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/manutencoes/{id}:
 *   delete:
 *     summary: Remove uma manutenção
 *     tags: [ManutencaoTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Excluída com sucesso
 */
router.delete('/:id', controller.remover);

module.exports = router;
