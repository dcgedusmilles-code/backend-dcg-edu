const express = require('express');
const router = express.Router();
const controller = require('../../controllers/avaliacao_certicacao/examining_boards_controller');

/**
 * @swagger
 * tags:
 *   name: BancaExaminadora
 *   description: Gestão da Banca Examinadora
 */

/**
 * @swagger
 * /bancas:
 *   get:
 *     summary: Lista todas as bancas
 *     tags: [BancaExaminadora]
 */
router.get('/all', controller.listar);

/**
 * @swagger
 * /bancas/{id}:
 *   get:
 *     summary: Busca banca por ID
 *     tags: [BancaExaminadora]
 */
router.get('/getById/:id', controller.buscarPorId);

/**
 * @swagger
 * /bancas:
 *   post:
 *     summary: Cria uma banca
 *     tags: [BancaExaminadora]
 */
router.post('/create', controller.criar);

/**
 * @swagger
 * /bancas/{id}:
 *   put:
 *     summary: Atualiza uma banca
 *     tags: [BancaExaminadora]
 */
router.put('/update/:id', controller.atualizar);

/**
 * @swagger
 * /bancas/{id}:
 *   delete:
 *     summary: Remove uma banca
 *     tags: [BancaExaminadora]
 */
router.delete('/delete/:id', controller.remover);

module.exports = router;
