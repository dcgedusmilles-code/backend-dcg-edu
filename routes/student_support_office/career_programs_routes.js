const express = require('express');
const router = express.Router();
const programaCarreiraController = require('../../controllers/student_support_office/career_programs_controller');

/**
 * @swagger
 * tags:
 *   name: Programas de Carreira
 *   description: Gestão dos programas de carreira em parceria
 */

/**
 * @swagger
 * /programas-carreira:
 *   get:
 *     summary: Lista todos os programas de carreira
 *     tags: [Programas de Carreira]
 *     responses:
 *       200:
 *         description: Lista de programas
 */
router.get('/', programaCarreiraController.getAll);

/**
 * @swagger
 * /programas-carreira/{id}:
 *   get:
 *     summary: Retorna um programa pelo ID
 *     tags: [Programas de Carreira]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Programa encontrado
 */
router.get('/:id', programaCarreiraController.getById);

/**
 * @swagger
 * /programas-carreira:
 *   post:
 *     summary: Cria um novo programa de carreira
 *     tags: [Programas de Carreira]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Programa criado com sucesso
 */
router.post('/', programaCarreiraController.create);

/**
 * @swagger
 * /programas-carreira/{id}:
 *   put:
 *     summary: Atualiza um programa de carreira
 *     tags: [Programas de Carreira]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Programa atualizado
 */
router.put('/:id', programaCarreiraController.update);

/**
 * @swagger
 * /programas-carreira/{id}:
 *   delete:
 *     summary: Remove um programa de carreira
 *     tags: [Programas de Carreira]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Programa removido
 */
router.delete('/:id', programaCarreiraController.delete);

module.exports = router;
