const express = require('express');
const router = express.Router();
const controller = require('../../controllers/student_support_office/academic_monitoring_controller');

/**
 * @swagger
 * tags:
 *   name: Acompanhamentos
 *   description: Gestão de acompanhamentos acadêmicos
 */

/**
 * @swagger
 * /acompanhamentos:
 *   get:
 *     summary: Lista todos os acompanhamentos acadêmicos
 *     tags: [Acompanhamentos]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /acompanhamentos/{id}:
 *   get:
 *     summary: Busca um acompanhamento por ID
 *     tags: [Acompanhamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 */
router.get('/:id', controller.buscar);

/**
 * @swagger
 * /acompanhamentos:
 *   post:
 *     summary: Cria um novo acompanhamento acadêmico
 *     tags: [Acompanhamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_estudante:
 *                 type: integer
 *               tipo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               data_fim:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /acompanhamentos/{id}:
 *   put:
 *     summary: Atualiza um acompanhamento
 *     tags: [Acompanhamentos]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /acompanhamentos/{id}:
 *   delete:
 *     summary: Exclui um acompanhamento
 *     tags: [Acompanhamentos]
 */
router.delete('/:id', controller.excluir);

module.exports = router;
