const express = require('express');
const router = express.Router();
const controller = require('../../controllers/internship_and_professional_integration_office/internships_controller');



/**
 * @swagger
 * tags:
 *   name: Estagio
 *   description: Gestão de estágios
 */

/**
 * @swagger
 * /api/estagios:
 *   get:
 *     summary: Lista todos os estágios
 *     tags: [Estagio]
 *     responses:
 *       200:
 *         description: Lista de estágios retornada
 */

/**
 * @swagger
 * /api/estagios/{id}:
 *   get:
 *     summary: Obtém um estágio pelo ID
 *     tags: [Estagio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do estágio
 *     responses:
 *       200:
 *         description: Estágio encontrado
 *       404:
 *         description: Estágio não encontrado
 */

/**
 * @swagger
 * /api/estagios:
 *   post:
 *     summary: Cria um novo estágio
 *     tags: [Estagio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_estudante: { type: integer }
 *               id_empresa: { type: integer }
 *               tipo: { type: string }
 *               area_atuacao: { type: string }
 *               data_inicio: { type: string, format: date }
 *               data_fim: { type: string, format: date }
 *               status: { type: string }
 *               supervisor_interno: { type: integer }
 *               supervisor_externo: { type: integer }
 *     responses:
 *       201:
 *         description: Estágio criado
 */

/**
 * @swagger
 * /api/estagios/{id}:
 *   put:
 *     summary: Atualiza um estágio existente
 *     tags: [Estagio]
 *   delete:
 *     summary: Remove um estágio
 *     tags: [Estagio]
 */


router.get('/estagios', controller.list);
router.get('/estagios/:id', controller.get);
router.post('/estagios', controller.create);
router.put('/estagios/:id', controller.update);
router.delete('/estagios/:id', controller.delete);

module.exports = router;
