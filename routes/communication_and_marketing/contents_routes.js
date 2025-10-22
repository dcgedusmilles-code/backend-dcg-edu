const express = require('express');
const conteudoController = require('../../controllers/communication_and_marketing/contents_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Conteúdos
 *   description: API para gestão de conteúdos
 */

/**
 * @swagger
 * /api/conteudos:
 *   get:
 *     summary: Lista todos conteúdos
 *     tags: [Conteúdos]
 */
router.get('/', conteudoController.findAll);

/**
 * @swagger
 * /api/conteudos/{id}:
 *   get:
 *     summary: Busca conteúdo por ID
 *     tags: [Conteúdos]
 */
router.get('/:id', conteudoController.findById);

/**
 * @swagger
 * /api/conteudos:
 *   post:
 *     summary: Cria novo conteúdo
 *     tags: [Conteúdos]
 */
router.post('/', conteudoController.create);

/**
 * @swagger
 * /api/conteudos/{id}:
 *   put:
 *     summary: Atualiza conteúdo existente
 *     tags: [Conteúdos]
 */
router.put('/:id', conteudoController.update);

/**
 * @swagger
 * /api/conteudos/{id}:
 *   delete:
 *     summary: Remove conteúdo
 *     tags: [Conteúdos]
 */
router.delete('/:id', conteudoController.delete);

module.exports = router;
