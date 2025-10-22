const express = require('express');
const router = express.Router();
const controller = require('../../controllers/infrastructure_and_logistics/heritage_controller');

/**
 * @swagger
 * tags:
 *   name: Patrimonio
 *   description: Gestão de bens patrimoniais
 */

/**
 * @swagger
 * /api/patrimonios:
 *   get:
 *     tags: [Patrimonio]
 *     summary: Lista todos os patrimônios
 *     responses:
 *       200:
 *         description: Lista de patrimônios retornada
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/patrimonios/{id}:
 *   get:
 *     tags: [Patrimonio]
 *     summary: Obtém um patrimônio específico
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /api/patrimonios:
 *   post:
 *     tags: [Patrimonio]
 *     summary: Cria um novo patrimônio
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/patrimonios/{id}:
 *   put:
 *     tags: [Patrimonio]
 *     summary: Atualiza um patrimônio existente
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/patrimonios/{id}:
 *   delete:
 *     tags: [Patrimonio]
 *     summary: Remove um patrimônio
 */
router.delete('/:id', controller.remover);

module.exports = router;
