const express = require('express');
const controller = require('../../controllers/human_resources/participation_in_training_controller');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ParticipacaoTreinamentos
 *   description: API de participação em treinamentos
 */

/**
 * @swagger
 * /participacoes-treinamentos:
 *   get:
 *     summary: Listar todas as participações
 *     tags: [ParticipacaoTreinamentos]
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /participacoes-treinamentos/{id}:
 *   get:
 *     summary: Obter participação por ID
 *     tags: [ParticipacaoTreinamentos]
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /participacoes-treinamentos:
 *   post:
 *     summary: Registrar nova participação
 *     tags: [ParticipacaoTreinamentos]
 */
router.post('/', controller.create);

/**
 * @swagger
 * /participacoes-treinamentos/{id}:
 *   put:
 *     summary: Atualizar participação
 *     tags: [ParticipacaoTreinamentos]
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /participacoes-treinamentos/{id}:
 *   delete:
 *     summary: Remover participação
 *     tags: [ParticipacaoTreinamentos]
 */
router.delete('/:id', controller.delete);

module.exports = router;
