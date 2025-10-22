const express = require('express');
const router = express.Router();
const reservaController = require('../../controllers/library_resource_center/reservations_controller');

/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Gestão de reservas de exemplares
 */

/**
 * @swagger
 * /reservas:
 *   get:
 *     summary: Lista todas as reservas
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Lista de reservas
 */
router.get('/', reservaController.listar);

/**
 * @swagger
 * /reservas/{id}:
 *   get:
 *     summary: Obtém uma reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *       404:
 *         description: Reserva não encontrada
 */
router.get('/:id', reservaController.buscarPorId);

/**
 * @swagger
 * /reservas:
 *   post:
 *     summary: Cria uma nova reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_exemplar:
 *                 type: integer
 *               id_usuario:
 *                 type: integer
 *               data_reserva:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reserva criada com sucesso
 */
router.post('/', reservaController.criar);

/**
 * @swagger
 * /reservas/{id}:
 *   put:
 *     summary: Atualiza uma reserva
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reserva atualizada com sucesso
 *       404:
 *         description: Reserva não encontrada
 */
router.put('/:id', reservaController.atualizar);

/**
 * @swagger
 * /reservas/{id}:
 *   delete:
 *     summary: Remove uma reserva
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Reserva removida com sucesso
 *       404:
 *         description: Reserva não encontrada
 */
router.delete('/:id', reservaController.remover);

module.exports = router;
