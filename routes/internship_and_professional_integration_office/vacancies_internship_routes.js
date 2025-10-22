const express = require('express');
const router = express.Router();
const vagaEstagioController = require('../../controllers/internship_and_professional_integration_office/vacancies_internship_controller');

/**
 * @swagger
 * tags:
 *   name: Vagas de Estágio
 *   description: Gestão de vagas de estágio
 */

/**
 * @swagger
 * /vagas:
 *   get:
 *     summary: Lista todas as vagas de estágio
 *     tags: [Vagas de Estágio]
 *     responses:
 *       200:
 *         description: Lista de vagas retornada com sucesso
 */
router.get('/', vagaEstagioController.listar);

/**
 * @swagger
 * /vagas/{id}:
 *   get:
 *     summary: Obtém detalhes de uma vaga
 *     tags: [Vagas de Estágio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Detalhes da vaga
 *       404:
 *         description: Vaga não encontrada
 */
router.get('/:id', vagaEstagioController.obterPorId);

/**
 * @swagger
 * /vagas:
 *   post:
 *     summary: Cria uma nova vaga
 *     tags: [Vagas de Estágio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo_vaga:
 *                 type: string
 *               descricao:
 *                 type: string
 *               id_empresa:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Vaga criada com sucesso
 */
router.post('/', vagaEstagioController.criar);

/**
 * @swagger
 * /vagas/{id}:
 *   put:
 *     summary: Atualiza uma vaga
 *     tags: [Vagas de Estágio]
 */
router.put('/:id', vagaEstagioController.atualizar);

/**
 * @swagger
 * /vagas/{id}:
 *   delete:
 *     summary: Exclui uma vaga
 *     tags: [Vagas de Estágio]
 */
router.delete('/:id', vagaEstagioController.excluir);

module.exports = router;
