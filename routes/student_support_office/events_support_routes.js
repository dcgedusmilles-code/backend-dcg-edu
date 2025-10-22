const express = require('express');
const router = express.Router();
const controller = require('../../controllers/student_support_office/events_support_controller');

/**
 * @swagger
 * tags:
 *   name: Eventos de Apoio
 *   description: API para gerenciamento de eventos de apoio
 */

/**
 * @swagger
 * /api/eventos-apoio:
 *   get:
 *     summary: Lista todos os eventos de apoio
 *     tags: [Eventos de Apoio]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /api/eventos-apoio/{id}:
 *   get:
 *     summary: Retorna um evento de apoio específico
 *     tags: [Eventos de Apoio]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do evento de apoio
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /api/eventos-apoio:
 *   post:
 *     summary: Cria um novo evento de apoio
 *     tags: [Eventos de Apoio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_evento:
 *                 type: string
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
 *               publico_alvo:
 *                 type: string
 *               responsavel:
 *                 type: integer
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /api/eventos-apoio/{id}:
 *   put:
 *     summary: Atualiza um evento de apoio existente
 *     tags: [Eventos de Apoio]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /api/eventos-apoio/{id}:
 *   delete:
 *     summary: Remove um evento de apoio
 *     tags: [Eventos de Apoio]
 */
router.delete('/:id', controller.excluir);

module.exports = router;
