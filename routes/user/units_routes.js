const router = require('express').Router();
const unitController = require('../../controllers/user/unit_controller');

/**
 * @swagger
 * tags:
 *   name: Units
 *   description: Gestão de unidades
 */

/**
 * @swagger
 * /units:
 *   get:
 *     summary: Lista todas unidades
 *     tags: [Units]
 *     responses:
 *       200:
 *         description: Lista de unidades
 */
router.get('/', (req, res) => unitController.list(req, res));

/**
 * @swagger
 * /units/{id}:
 *   get:
 *     summary: Obter uma unidade
 *     tags: [Units]
 */
router.get('/:id', (req, res) => unitController.get(req, res));

/**
 * @swagger
 * /units:
 *   post:
 *     summary: Criar nova unidade
 *     tags: [Units]
 */
router.post('/', (req, res) => unitController.create(req, res));

/**
 * @swagger
 * /units/{id}:
 *   put:
 *     summary: Atualizar unidade
 *     tags: [Units]
 */
router.put('/:id', (req, res) => unitController.update(req, res));

/**
 * @swagger
 * /units/{id}:
 *   delete:
 *     summary: Remover unidade
 *     tags: [Units]
 */
router.delete('/:id', (req, res) => unitController.delete(req, res));

module.exports = router;
