const express = require('express');
const router = express.Router();
const controller = require('../../controllers/internship_and_professional_integration_office/partner_companies_controller');


/**
 * @swagger
 * tags:
 *   name: EmpresaParceira
 *   description: Gestão de empresas parceiras
 */

/**
 * @swagger
 * /api/empresas:
 *   get:
 *     summary: Lista todas as empresas parceiras
 *     tags: [EmpresaParceira]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */

/**
 * @swagger
 * /api/empresas/{id}:
 *   get:
 *     summary: Obtém uma empresa parceira pelo ID
 *     tags: [EmpresaParceira]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Empresa encontrada
 *       404:
 *         description: Não encontrada
 */

/**
 * @swagger
 * /api/empresas:
 *   post:
 *     summary: Cadastra uma nova empresa parceira
 *     tags: [EmpresaParceira]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome: { type: string }
 *               setor: { type: string }
 *               endereco: { type: string }
 *               telefone: { type: string }
 *               email: { type: string }
 *               contato_responsavel: { type: string }
 *               tipo_parceria: { type: string }
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 */

/**
 * @swagger
 * /api/empresas/{id}:
 *   put:
 *     summary: Atualiza uma empresa parceira existente
 *     tags: [EmpresaParceira]
 *   delete:
 *     summary: Remove uma empresa parceira
 *     tags: [EmpresaParceira]
 */



router.get('/empresas', controller.list);
router.get('/empresas/:id', controller.get);
router.post('/empresas', controller.create);
router.put('/empresas/:id', controller.update);
router.delete('/empresas/:id', controller.delete);

module.exports = router;
