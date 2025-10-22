const express = require('express');
const router = express.Router();
const controller = require('../../controllers/it_department/infrastructure_network_controller');

/**
 * @swagger
 * tags:
 *   name: RedeInfraestrutura
 *   description: Gestão de infraestrutura de rede
 */

/**
 * @swagger
 * /api/redes:
 *   get:
 *     summary: Lista todas as redes
 *     tags: [RedeInfraestrutura]
 *     responses:
 *       200:
 *         description: Lista de redes
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/redes/{id}:
 *   get:
 *     summary: Obtém uma rede pelo ID
 *     tags: [RedeInfraestrutura]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Rede encontrada
 *       404:
 *         description: Rede não encontrada
 */
router.get('/:id', controller.obterPorId);

/**
 * @swagger
 * /api/redes:
 *   post:
 *     summary: Cria uma nova rede
 *     tags: [RedeInfraestrutura]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Rede criada com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/redes/{id}:
 *   put:
 *     summary: Atualiza uma rede existente
 *     tags: [RedeInfraestrutura]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Rede atualizada
 *       404:
 *         description: Não encontrada
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/redes/{id}:
 *   delete:
 *     summary: Remove uma rede
 *     tags: [RedeInfraestrutura]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Removida com sucesso
 */
router.delete('/:id', controller.remover);

module.exports = router;
