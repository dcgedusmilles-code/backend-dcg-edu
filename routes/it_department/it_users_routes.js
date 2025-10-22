const express = require('express');
const router = express.Router();
const usuarioTIController = require('../../controllers/it_department/it_users_controller');

/**
 * @swagger
 * tags:
 *   name: UsuarioTI
 *   description: Gestão de Usuários de TI
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários de TI
 *     tags: [UsuarioTI]
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get('/', usuarioTIController.listar);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtém um usuário de TI específico
 *     tags: [UsuarioTI]
 */
router.get('/:id', usuarioTIController.obter);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cadastra um novo usuário de TI
 *     tags: [UsuarioTI]
 */
router.post('/', usuarioTIController.criar);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza dados de um usuário de TI
 *     tags: [UsuarioTI]
 */
router.put('/:id', usuarioTIController.atualizar);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Remove um usuário de TI
 *     tags: [UsuarioTI]
 */
router.delete('/:id', usuarioTIController.deletar);

module.exports = router;
