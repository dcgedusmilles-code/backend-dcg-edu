const { Router } = require('express');
const controller = require('../../controllers/pedagogico/material_didatico_controller');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Materiais Didáticos
 *   description: Gestão de materiais didáticos
 */

/**
 * @swagger
 * /materiais:
 *   get:
 *     tags: [Materiais Didáticos]
 *     summary: Listar todos os materiais
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /materiais/{id}:
 *   get:
 *     tags: [Materiais Didáticos]
 *     summary: Obter material por ID
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /materiais:
 *   post:
 *     tags: [Materiais Didáticos]
 *     summary: Criar novo material
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /materiais/{id}:
 *   put:
 *     tags: [Materiais Didáticos]
 *     summary: Atualizar material
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /materiais/{id}:
 *   delete:
 *     tags: [Materiais Didáticos]
 *     summary: Remover material
 */
router.delete('/:id', controller.remover);

module.exports = router;
