const express = require('express');
const controller = require('../../controllers/human_resources/job_recruitment_controller');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: RecrutamentoVagas
 *   description: API de vagas de recrutamento
 */

/**
 * @swagger
 * /recrutamento-vagas:
 *   get:
 *     summary: Listar todas as vagas
 *     tags: [RecrutamentoVagas]
 *     responses:
 *       200:
 *         description: Lista de vagas
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /recrutamento-vagas/{id}:
 *   get:
 *     summary: Obter vaga por ID
 *     tags: [RecrutamentoVagas]
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /recrutamento-vagas:
 *   post:
 *     summary: Criar nova vaga
 *     tags: [RecrutamentoVagas]
 */
router.post('/', controller.create);

/**
 * @swagger
 * /recrutamento-vagas/{id}:
 *   put:
 *     summary: Atualizar vaga
 *     tags: [RecrutamentoVagas]
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /recrutamento-vagas/{id}:
 *   delete:
 *     summary: Remover vaga
 *     tags: [RecrutamentoVagas]
 */
router.delete('/:id', controller.delete);

module.exports = router;
