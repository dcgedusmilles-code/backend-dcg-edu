const express = require('express');
const router = express.Router();
const manutencaoController = require('../../controllers/infrastructure_and_logistics/maintenance_controller');

/**
 * @swagger
 * tags:
 *   name: Manutenções
 *   description: Gestão de manutenções de patrimônios
 */

/**
 * @swagger
 * /api/manutencoes:
 *   get:
 *     summary: Lista todas as manutenções
 *     tags: [Manutenções]
 *     responses:
 *       200:
 *         description: Lista de manutenções retornada com sucesso
 */
router.get('/', manutencaoController.getAll);

/**
 * @swagger
 * /api/manutencoes/{id}:
 *   get:
 *     summary: Retorna uma manutenção específica
 *     tags: [Manutenções]
 */
router.get('/:id', manutencaoController.getById);

/**
 * @swagger
 * /api/manutencoes:
 *   post:
 *     summary: Cria uma nova manutenção
 *     tags: [Manutenções]
 */
router.post('/', manutencaoController.create);

/**
 * @swagger
 * /api/manutencoes/{id}:
 *   put:
 *     summary: Atualiza uma manutenção existente
 *     tags: [Manutenções]
 */
router.put('/:id', manutencaoController.update);

/**
 * @swagger
 * /api/manutencoes/{id}:
 *   delete:
 *     summary: Remove uma manutenção
 *     tags: [Manutenções]
 */
router.delete('/:id', manutencaoController.delete);

module.exports = router;
