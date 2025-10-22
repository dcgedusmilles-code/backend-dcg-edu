const express = require('express');
const router = express.Router();
const suporteTIController = require('../../controllers/it_department/it_support_controller');

/**
 * @swagger
 * tags:
 *   name: SuporteTI
 *   description: Gestão de solicitações de suporte de TI
 */

/**
 * @swagger
 * /suportes:
 *   get:
 *     summary: Lista todos os suportes de TI
 *     tags: [SuporteTI]
 *     responses:
 *       200:
 *         description: Lista de suportes
 */
router.get('/', suporteTIController.listar);

/**
 * @swagger
 * /suportes/{id}:
 *   get:
 *     summary: Obtém um suporte específico
 *     tags: [SuporteTI]
 */
router.get('/:id', suporteTIController.obter);

/**
 * @swagger
 * /suportes:
 *   post:
 *     summary: Cria um novo suporte de TI
 *     tags: [SuporteTI]
 */
router.post('/', suporteTIController.criar);

/**
 * @swagger
 * /suportes/{id}:
 *   put:
 *     summary: Atualiza um suporte existente
 *     tags: [SuporteTI]
 */
router.put('/:id', suporteTIController.atualizar);

/**
 * @swagger
 * /suportes/{id}:
 *   delete:
 *     summary: Remove um suporte de TI
 *     tags: [SuporteTI]
 */
router.delete('/:id', suporteTIController.deletar);

module.exports = router;
