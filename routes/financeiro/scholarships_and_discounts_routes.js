const express = require('express');
const router = express.Router();
const BolsaDescontoController = require('../../controllers/financeiro/scholarships_and_discounts_controller');

/**
 * @swagger
 * tags:
 *   name: BolsasDesconto
 *   description: Gestão das bolsas de desconto
 */

/**
 * @swagger
 * /bolsas-desconto:
 *   get:
 *     summary: Lista todas as bolsas de desconto
 *     tags: [BolsasDesconto]
 */
router.get('/', BolsaDescontoController.findAll);

/**
 * @swagger
 * /bolsas-desconto/{id}:
 *   get:
 *     summary: Busca uma bolsa de desconto pelo ID
 *     tags: [BolsasDesconto]
 */
router.get('/:id', BolsaDescontoController.findById);

/**
 * @swagger
 * /bolsas-desconto:
 *   post:
 *     summary: Cria uma nova bolsa de desconto
 *     tags: [BolsasDesconto]
 */
router.post('/', BolsaDescontoController.create);

/**
 * @swagger
 * /bolsas-desconto/{id}:
 *   put:
 *     summary: Atualiza uma bolsa de desconto
 *     tags: [BolsasDesconto]
 */
router.put('/:id', BolsaDescontoController.update);

/**
 * @swagger
 * /bolsas-desconto/{id}:
 *   delete:
 *     summary: Remove uma bolsa de desconto
 *     tags: [BolsasDesconto]
 */
router.delete('/:id', BolsaDescontoController.delete);

module.exports = router;
