const express = require('express');
const controller = require('../../controllers/human_resources/payroll_controller');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: FolhaPagamentos
 *   description: API de gestão de folha de pagamento
 */

/**
 * @swagger
 * /folhas-pagamento:
 *   get:
 *     summary: Listar todas as folhas de pagamento
 *     tags: [FolhaPagamentos]
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /folhas-pagamento/{id}:
 *   get:
 *     summary: Obter folha de pagamento por ID
 *     tags: [FolhaPagamentos]
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /folhas-pagamento:
 *   post:
 *     summary: Criar nova folha de pagamento
 *     tags: [FolhaPagamentos]
 */
router.post('/', controller.create);

/**
 * @swagger
 * /folhas-pagamento/{id}:
 *   put:
 *     summary: Atualizar folha de pagamento
 *     tags: [FolhaPagamentos]
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /folhas-pagamento/{id}:
 *   delete:
 *     summary: Remover folha de pagamento
 *     tags: [FolhaPagamentos]
 */
router.delete('/:id', controller.delete);

module.exports = router;
