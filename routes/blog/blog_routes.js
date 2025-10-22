const express = require('express');
const router = express.Router();
const controller = require('../../controllers/blog/blog_controller');

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Gestão de posts no blog
 */

/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: Lista todos os posts
 *     tags: [Blogs]
 */
router.get('/all', controller.listar);

/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     summary: Retorna um post específico
 *     tags: [Blogs]
 */
router.get('/getById/:id', controller.buscarPorId);

/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: Cria um novo post
 *     tags: [Blogs]
 */
router.post('/create', controller.criar);

/**
 * @swagger
 * /blogs/{id}:
 *   put:
 *     summary: Atualiza um post existente
 *     tags: [Blogs]
 */
router.put('/update/:id', controller.criar);

/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     summary: Remove um post
 *     tags: [Blogs]
 */
router.delete('/delete/:id', controller.remover);

module.exports = router;
