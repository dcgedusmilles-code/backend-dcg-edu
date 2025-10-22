const express = require('express');
const controller = require('../../controllers/human_resources/selection_process_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Processos Seletivos
 *   description: Gestão de processos seletivos
 */

/**
 * @swagger
 * /processos:
 *   get:
 *     summary: Lista todos os processos seletivos
 *     tags: [Processos Seletivos]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /processos/{id}:
 *   get:
 *     summary: Busca um processo seletivo pelo ID
 *     tags: [Processos Seletivos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Processo encontrado }
 *       404: { description: Processo não encontrado }
 */
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /processos:
 *   post:
 *     summary: Cria um novo processo seletivo
 *     tags: [Processos Seletivos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vaga_id: { type: integer }
 *               candidato_id: { type: integer }
 *               status: { type: string }
 *               data_etapa: { type: string, format: date }
 *     responses:
 *       201: { description: Processo criado }
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /processos/{id}:
 *   put:
 *     summary: Atualiza um processo seletivo
 *     tags: [Processos Seletivos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /processos/{id}:
 *   delete:
 *     summary: Remove um processo seletivo
 *     tags: [Processos Seletivos]
 */
router.delete('/:id', controller.deletar);

module.exports = router;
