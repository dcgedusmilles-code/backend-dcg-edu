const express = require('express');
const router = express.Router();
const funcionarioSecretariaController = require('../../controllers/secretaria_academica/secretariat_staff_controller');

/**
 * @swagger
 * tags:
 *   name: Funcionário Secretaria
 *   description: Gestão de funcionários ligados à secretaria acadêmica
 */

/**
 * @swagger
 * /api/funcionarios-secretaria:
 *   get:
 *     summary: Lista todos os funcionários da secretaria
 *     tags: [Funcionário Secretaria]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', funcionarioSecretariaController.findAll);

/**
 * @swagger
 * /api/funcionarios-secretaria/{id}:
 *   get:
 *     summary: Busca um funcionário da secretaria pelo ID
 *     tags: [Funcionário Secretaria]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema: { type: integer }
 */
router.get('/:id', funcionarioSecretariaController.findById);

/**
 * @swagger
 * /api/funcionarios-secretaria:
 *   post:
 *     summary: Cria um vínculo de funcionário com a secretaria
 *     tags: [Funcionário Secretaria]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               secretaria_id: { type: integer }
 *               funcionario_id: { type: integer }
 *     responses:
 *       201:
 *         description: Registro criado com sucesso
 */
router.post('/', funcionarioSecretariaController.create);

/**
 * @swagger
 * /api/funcionarios-secretaria/{id}:
 *   put:
 *     summary: Atualiza um vínculo de funcionário com a secretaria
 *     tags: [Funcionário Secretaria]
 */
router.put('/:id', funcionarioSecretariaController.update);

/**
 * @swagger
 * /api/funcionarios-secretaria/{id}:
 *   delete:
 *     summary: Remove o vínculo de um funcionário com a secretaria
 *     tags: [Funcionário Secretaria]
 */
router.delete('/:id', funcionarioSecretariaController.delete);

module.exports = router;
