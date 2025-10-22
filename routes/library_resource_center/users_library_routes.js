const express = require('express');
const controller = require('../../controllers/library_resource_center/users_library_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: UsuarioBiblioteca
 *   description: Gestão de usuários da biblioteca
 */

/**
 * @swagger
 * /usuarios-biblioteca:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [UsuarioBiblioteca]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /usuarios-biblioteca/{id}:
 *   get:
 *     summary: Obtém um usuário por ID
 *     tags: [UsuarioBiblioteca]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /usuarios-biblioteca:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [UsuarioBiblioteca]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               tipo:
 *                 type: string
 *               contato:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /usuarios-biblioteca/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [UsuarioBiblioteca]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /usuarios-biblioteca/{id}:
 *   delete:
 *     summary: Remove um usuário
 *     tags: [UsuarioBiblioteca]
 */
router.delete('/:id', controller.deletar);

module.exports = router;
