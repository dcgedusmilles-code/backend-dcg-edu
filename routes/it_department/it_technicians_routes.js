const express = require('express');
const router = express.Router();
const tecnicoTIController = require('../../controllers/it_department/it_technicians_controller');

/**
 * @swagger
 * tags:
 *   name: TecnicoTI
 *   description: Gestão de Técnicos de TI
 */

/**
 * @swagger
 * /tecnicos:
 *   get:
 *     summary: Lista todos os técnicos de TI
 *     tags: [TecnicoTI]
 *     responses:
 *       200:
 *         description: Lista de técnicos
 */
router.get('/', tecnicoTIController.listar);

/**
 * @swagger
 * /tecnicos/{id}:
 *   get:
 *     summary: Obtém um técnico específico
 *     tags: [TecnicoTI]
 */
router.get('/:id', tecnicoTIController.obter);

/**
 * @swagger
 * /tecnicos:
 *   post:
 *     summary: Cadastra um novo técnico
 *     tags: [TecnicoTI]
 */
router.post('/', tecnicoTIController.criar);

/**
 * @swagger
 * /tecnicos/{id}:
 *   put:
 *     summary: Atualiza dados de um técnico
 *     tags: [TecnicoTI]
 */
router.put('/:id', tecnicoTIController.atualizar);

/**
 * @swagger
 * /tecnicos/{id}:
 *   delete:
 *     summary: Remove um técnico
 *     tags: [TecnicoTI]
 */
router.delete('/:id', tecnicoTIController.deletar);

module.exports = router;
