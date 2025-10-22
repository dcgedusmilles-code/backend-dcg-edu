const express = require('express');
const router = express.Router();
const TransporteController = require('../../controllers/infrastructure_and_logistics/transportation_controller');

/**
 * @swagger
 * tags:
 *   name: Transportes
 *   description: Gestão de transportes da frota
 */

/**
 * @swagger
 * /transportes:
 *   get:
 *     summary: Lista todos os transportes
 *     tags: [Transportes]
 *     responses:
 *       200:
 *         description: Lista de transportes retornada com sucesso
 */
router.get('/', TransporteController.listar);

/**
 * @swagger
 * /transportes/{id}:
 *   get:
 *     summary: Retorna um transporte pelo ID
 *     tags: [Transportes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do transporte
 *     responses:
 *       200:
 *         description: Transporte encontrado
 */
router.get('/:id', TransporteController.obterPorId);

/**
 * @swagger
 * /transportes:
 *   post:
 *     summary: Cria um novo transporte
 *     tags: [Transportes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *               placa:
 *                 type: string
 *               modelo:
 *                 type: string
 *               capacidade:
 *                 type: integer
 *               ano_fabricacao:
 *                 type: integer
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Transporte criado com sucesso
 */
router.post('/', TransporteController.criar);

/**
 * @swagger
 * /transportes/{id}:
 *   put:
 *     summary: Atualiza um transporte existente
 *     tags: [Transportes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Transporte atualizado com sucesso
 */
router.put('/:id', TransporteController.atualizar);

/**
 * @swagger
 * /transportes/{id}:
 *   delete:
 *     summary: Remove um transporte
 *     tags: [Transportes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       204:
 *         description: Transporte removido com sucesso
 */
router.delete('/:id', TransporteController.remover);

module.exports = router;
