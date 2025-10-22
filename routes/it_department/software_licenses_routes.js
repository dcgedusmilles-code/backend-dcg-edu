const express = require('express');
const router = express.Router();
const controller = require('../../controllers/it_department/software_licenses_controller');

/**
 * @swagger
 * tags:
 *   name: LicencaSoftware
 *   description: Gestão de licenças de software
 */

/**
 * @swagger
 * /licencas:
 *   get:
 *     summary: Lista todas as licenças de software
 *     tags: [LicencaSoftware]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/licencas', controller.listar);

/**
 * @swagger
 * /licencas/{id}:
 *   get:
 *     summary: Retorna uma licença específica
 *     tags: [LicencaSoftware]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Licença encontrada
 *       404:
 *         description: Licença não encontrada
 */
router.get('/licencas/:id', controller.obter);

/**
 * @swagger
 * /licencas:
 *   post:
 *     summary: Cria uma nova licença de software
 *     tags: [LicencaSoftware]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_software: { type: string }
 *               chave_licenca: { type: string }
 *               quantidade: { type: integer }
 *               data_inicio: { type: string, format: date }
 *               data_validade: { type: string, format: date }
 *               fornecedor: { type: string }
 *               status: { type: string }
 *     responses:
 *       201:
 *         description: Licença criada com sucesso
 */
router.post('/licencas', controller.criar);

/**
 * @swagger
 * /licencas/{id}:
 *   put:
 *     summary: Atualiza uma licença de software existente
 *     tags: [LicencaSoftware]
 */
router.put('/licencas/:id', controller.atualizar);

/**
 * @swagger
 * /licencas/{id}:
 *   delete:
 *     summary: Exclui uma licença de software
 *     tags: [LicencaSoftware]
 */
router.delete('/licencas/:id', controller.excluir);

module.exports = router;
