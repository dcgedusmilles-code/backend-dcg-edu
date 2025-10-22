const express = require('express');
const router = express.Router();
const eventoBibliotecaController = require('../../controllers/library_resource_center/library_events_controller');

/**
 * @swagger
 * tags:
 *   name: EventosBiblioteca
 *   description: Gerenciamento de eventos da biblioteca
 */

/**
 * @swagger
 * /eventos-biblioteca:
 *   get:
 *     summary: Lista todos os eventos da biblioteca
 *     tags: [EventosBiblioteca]
 *     responses:
 *       200:
 *         description: Lista de eventos
 */
router.get('/', eventoBibliotecaController.listar);

/**
 * @swagger
 * /eventos-biblioteca/{id}:
 *   get:
 *     summary: Busca um evento pelo ID
 *     tags: [EventosBiblioteca]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 */
router.get('/:id', eventoBibliotecaController.buscarPorId);

/**
 * @swagger
 * /eventos-biblioteca:
 *   post:
 *     summary: Cria um novo evento
 *     tags: [EventosBiblioteca]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EventoBiblioteca'
 */
router.post('/', eventoBibliotecaController.criar);

/**
 * @swagger
 * /eventos-biblioteca/{id}:
 *   put:
 *     summary: Atualiza um evento existente
 *     tags: [EventosBiblioteca]
 */
router.put('/:id', eventoBibliotecaController.atualizar);

/**
 * @swagger
 * /eventos-biblioteca/{id}:
 *   delete:
 *     summary: Remove um evento
 *     tags: [EventosBiblioteca]
 */
router.delete('/:id', eventoBibliotecaController.deletar);

module.exports = router;
