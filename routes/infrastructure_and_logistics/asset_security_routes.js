const express = require('express');
const router = express.Router();
const controller = require('../../controllers/infrastructure_and_logistics/asset_security_controller');

/**
 * @swagger
 * tags:
 *   name: SegurancaPatrimonial
 *   description: Gestão da segurança patrimonial
 */

/**
 * @swagger
 * /api/seguranca:
 *   get:
 *     tags: [SegurancaPatrimonial]
 *     summary: Lista todos os registros de segurança patrimonial
 *     responses:
 *       200:
 *         description: Lista obtida com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/seguranca/{id}:
 *   get:
 *     tags: [SegurancaPatrimonial]
 *     summary: Obtém um registro específico
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /api/seguranca:
 *   post:
 *     tags: [SegurancaPatrimonial]
 *     summary: Cria um novo registro
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/seguranca/{id}:
 *   put:
 *     tags: [SegurancaPatrimonial]
 *     summary: Atualiza um registro existente
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/seguranca/{id}:
 *   delete:
 *     tags: [SegurancaPatrimonial]
 *     summary: Remove um registro
 */
router.delete('/:id', controller.remover);

module.exports = router;
