const express = require('express');
const controller = require('../../controllers/internship_and_professional_integration_office/company_supervisors_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Supervisor Empresa
 *   description: Gestão de supervisores das empresas parceiras
 */

/**
 * @swagger
 * /supervisores:
 *   get:
 *     summary: Lista todos os supervisores
 *     tags: [Supervisor Empresa]
 *     responses:
 *       200:
 *         description: Lista de supervisores
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /supervisores/{id}:
 *   get:
 *     summary: Obter supervisor por ID
 *     tags: [Supervisor Empresa]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Supervisor encontrado
 *       404:
 *         description: Supervisor não encontrado
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /supervisores:
 *   post:
 *     summary: Criar um novo supervisor
 *     tags: [Supervisor Empresa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_empresa: { type: integer }
 *               nome: { type: string }
 *               cargo: { type: string }
 *               telefone: { type: string }
 *               email: { type: string }
 *     responses:
 *       201:
 *         description: Supervisor criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /supervisores/{id}:
 *   put:
 *     summary: Atualizar supervisor existente
 *     tags: [Supervisor Empresa]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Atualizado com sucesso
 *       404:
 *         description: Supervisor não encontrado
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /supervisores/{id}:
 *   delete:
 *     summary: Remover supervisor
 *     tags: [Supervisor Empresa]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Removido com sucesso
 */
router.delete('/:id', controller.remover);

module.exports = router;
