const express = require('express');
const controller = require('../../controllers/internship_and_professional_integration_office/employability_programs_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Programa de Empregabilidade
 *   description: Gestão dos programas de empregabilidade
 */

/**
 * @swagger
 * /programas:
 *   get:
 *     summary: Lista todos os programas de empregabilidade
 *     tags: [Programa de Empregabilidade]
 *     responses:
 *       200:
 *         description: Lista de programas
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /programas/{id}:
 *   get:
 *     summary: Obter programa por ID
 *     tags: [Programa de Empregabilidade]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Programa encontrado
 *       404:
 *         description: Programa não encontrado
 */
router.get('/:id', controller.obter);

/**
 * @swagger
 * /programas:
 *   post:
 *     summary: Criar um novo programa
 *     tags: [Programa de Empregabilidade]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome: { type: string }
 *               descricao: { type: string }
 *               tipo: { type: string }
 *               data_inicio: { type: string, format: date }
 *               data_fim: { type: string, format: date }
 *               parceiro: { type: integer }
 *     responses:
 *       201:
 *         description: Programa criado com sucesso
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /programas/{id}:
 *   put:
 *     summary: Atualizar um programa
 *     tags: [Programa de Empregabilidade]
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
 *         description: Programa atualizado
 *       404:
 *         description: Programa não encontrado
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /programas/{id}:
 *   delete:
 *     summary: Remover programa
 *     tags: [Programa de Empregabilidade]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Programa removido
 */
router.delete('/:id', controller.remover);

module.exports = router;
