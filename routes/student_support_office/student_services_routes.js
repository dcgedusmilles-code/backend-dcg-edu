const express = require('express');
const router = express.Router();
const controller = require('../../controllers/student_support_office/student_services_controller');

/**
 * @swagger
 * tags:
 *   name: Atendimentos Estudantis
 *   description: Gestão dos atendimentos realizados aos estudantes
 */

/**
 * @swagger
 * /atendimentos:
 *   get:
 *     summary: Lista todos os atendimentos estudantis
 *     tags: [Atendimentos Estudantis]
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /atendimentos/{id}:
 *   get:
 *     summary: Busca um atendimento por ID
 *     tags: [Atendimentos Estudantis]
 */
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /atendimentos:
 *   post:
 *     summary: Cria um novo atendimento estudantil
 *     tags: [Atendimentos Estudantis]
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /atendimentos/{id}:
 *   put:
 *     summary: Atualiza um atendimento estudantil
 *     tags: [Atendimentos Estudantis]
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /atendimentos/{id}:
 *   delete:
 *     summary: Remove um atendimento estudantil
 *     tags: [Atendimentos Estudantis]
 */
router.delete('/:id', controller.remover);

module.exports = router;
