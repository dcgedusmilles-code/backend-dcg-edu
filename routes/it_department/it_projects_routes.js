const express = require('express');
const router = express.Router();
const controller = require('../../controllers/it_department/it_projects_controller');

/**
 * @swagger
 * tags:
 *   name: ProjetosTI
 *   description: Gestão de projetos de TI
 */

/**
 * @swagger
 * /projetos:
 *   get:
 *     summary: Lista todos os projetos de TI
 *     tags: [ProjetosTI]
 *     responses:
 *       200:
 *         description: Lista de projetos
 */
router.get('/projetos', controller.listar);

/**
 * @swagger
 * /projetos/{id}:
 *   get:
 *     summary: Retorna um projeto de TI pelo ID
 *     tags: [ProjetosTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Projeto encontrado
 *       404:
 *         description: Projeto não encontrado
 */
router.get('/projetos/:id', controller.buscarPorId);

/**
 * @swagger
 * /projetos:
 *   post:
 *     summary: Cria um novo projeto de TI
 *     tags: [ProjetosTI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjetoTI'
 *     responses:
 *       201:
 *         description: Projeto criado
 */
router.post('/projetos', controller.criar);

/**
 * @swagger
 * /projetos/{id}:
 *   put:
 *     summary: Atualiza um projeto existente
 *     tags: [ProjetosTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Projeto atualizado
 *       404:
 *         description: Projeto não encontrado
 */
router.put('/projetos/:id', controller.atualizar);

/**
 * @swagger
 * /projetos/{id}:
 *   delete:
 *     summary: Remove um projeto de TI
 *     tags: [ProjetosTI]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Removido com sucesso
 */
router.delete('/projetos/:id', controller.deletar);

module.exports = router;
