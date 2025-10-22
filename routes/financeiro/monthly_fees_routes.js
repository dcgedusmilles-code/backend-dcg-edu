const express = require('express');
const router = express.Router();
const MensalidadeController = require('../../controllers/financeiro/monthly_fees_controller');

/**
 * @swagger
 * tags:
 *   name: Mensalidades
 *   description: Gestão das mensalidades
 */

/**
 * @swagger
 * /mensalidades:
 *   get:
 *     summary: Lista todas as mensalidades
 *     tags: [Mensalidades]
 */
router.get('/', MensalidadeController.findAll);

/**
 * @swagger
 * /mensalidades/{id}:
 *   get:
 *     summary: Busca uma mensalidade pelo ID
 *     tags: [Mensalidades]
 */
router.get('/:id', MensalidadeController.findById);

/**
 * @swagger
 * /mensalidades:
 *   post:
 *     summary: Cria uma nova mensalidade
 *     tags: [Mensalidades]
 */
router.post('/', MensalidadeController.create);

/**
 * @swagger
 * /mensalidades/{id}:
 *   put:
 *     summary: Atualiza uma mensalidade
 *     tags: [Mensalidades]
 */
router.put('/:id', MensalidadeController.update);

/**
 * @swagger
 * /mensalidades/{id}:
 *   delete:
 *     summary: Remove uma mensalidade
 *     tags: [Mensalidades]
 */
router.delete('/:id', MensalidadeController.delete);

module.exports = router;
