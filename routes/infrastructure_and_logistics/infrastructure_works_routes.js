const express = require('express');
const router = express.Router();
const obraInfraestruturaController = require('../../controllers/infrastructure_and_logistics/infrastructure_works_controller');

/**
 * @swagger
 * tags:
 *   name: ObraInfraestrutura
 *   description: Gestão de obras e infraestruturas
 */

/**
 * @swagger
 * /api/obras:
 *   get:
 *     summary: Lista todas as obras
 *     tags: [ObraInfraestrutura]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', obraInfraestruturaController.getAll);

/**
 * @swagger
 * /api/obras/{id}:
 *   get:
 *     summary: Retorna uma obra específica
 *     tags: [ObraInfraestrutura]
 */
router.get('/:id', obraInfraestruturaController.getById);

/**
 * @swagger
 * /api/obras:
 *   post:
 *     summary: Cria uma nova obra
 *     tags: [ObraInfraestrutura]
 */
router.post('/', obraInfraestruturaController.create);

/**
 * @swagger
 * /api/obras/{id}:
 *   put:
 *     summary: Atualiza uma obra existente
 *     tags: [ObraInfraestrutura]
 */
router.put('/:id', obraInfraestruturaController.update);

/**
 * @swagger
 * /api/obras/{id}:
 *   delete:
 *     summary: Remove uma obra
 *     tags: [ObraInfraestrutura]
 */
router.delete('/:id', obraInfraestruturaController.delete);

module.exports = router;
