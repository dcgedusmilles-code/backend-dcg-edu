const express = require('express');
const router = express.Router();
const controller = require('../../controllers/blog/blog_category_controller');

/**
 * @swagger
 * tags:
 *   name: BlogCategories
 *   description: Gestão de categorias do blog
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     BlogCategory:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da categoria
 *           example: 1
 *         nome:
 *           type: string
 *           description: Nome da categoria
 *           example: "Tecnologia"
 *         descricao:
 *           type: string
 *           description: Descrição opcional da categoria
 *           example: "Artigos e tutoriais sobre programação e tecnologia"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação
 *           example: "2025-10-09T12:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Última atualização
 *           example: "2025-10-09T13:00:00Z"
 */

/**
 * @swagger
 * /api/blog-categories/all:
 *   get:
 *     summary: Lista todas as categorias do blog
 *     tags: [BlogCategories]
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BlogCategory'
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/all', controller.listar);

/**
 * @swagger
 * /api/blog-categories/getById/{id}:
 *   get:
 *     summary: Busca uma categoria específica pelo ID
 *     tags: [BlogCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Categoria encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BlogCategory'
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/getById/:id', controller.buscarPorId);

/**
 * @swagger
 * /api/blog-categories/create:
 *   post:
 *     summary: Cria uma nova categoria do blog
 *     tags: [BlogCategories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogCategory'
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BlogCategory'
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/create', controller.criar);

/**
 * @swagger
 * /api/blog-categories/update/{id}:
 *   put:
 *     summary: Atualiza uma categoria existente
 *     tags: [BlogCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogCategory'
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/update/:id', controller.atualizar);

/**
 * @swagger
 * /api/blog-categories/delete/{id}:
 *   delete:
 *     summary: Remove uma categoria do blog
 *     tags: [BlogCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria a ser removida
 *     responses:
 *       200:
 *         description: Categoria removida com sucesso
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/delete/:id', controller.remover);

module.exports = router;
