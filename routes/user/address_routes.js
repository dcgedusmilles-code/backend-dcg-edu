// routes/address_routes.js
const router = require('express').Router();
const addressController = require('../../controllers/user/address_controller');

/**
 * @swagger
 * tags:
 *   name: Addresses
 *   description: Gestão de endereços
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         rua:
 *           type: string
 *         numero:
 *           type: string
 *         bairro:
 *           type: string
 *         cidade:
 *           type: string
 *         provincia:
 *           type: string
 *         pais:
 *           type: string
 *         complemento:
 *           type: string
 *         cep:
 *           type: string
 *         coordenadas_latitude:
 *           type: string
 *         coordenadas_longitude:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       required:
 *         - rua
 *         - cidade
 */

/**
 * @swagger
 * /addresses:
 *   get:
 *     summary: Lista todos os endereços
 *     tags: [Addresses]
 *     responses:
 *       200:
 *         description: Lista de endereços
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Address'
 */
router.get('/', (req, res) => addressController.list(req, res));

/**
 * @swagger
 * /addresses/{id}:
 *   get:
 *     summary: Obter um endereço por id
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço
 *     responses:
 *       200:
 *         description: Endereço encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       404:
 *         description: Endereço não encontrado
 */
router.get('/:id', (req, res) => addressController.get(req, res));

/**
 * @swagger
 * /addresses:
 *   post:
 *     summary: Criar um novo endereço
 *     tags: [Addresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rua:
 *                 type: string
 *               numero:
 *                 type: string
 *               bairro:
 *                 type: string
 *               cidade:
 *                 type: string
 *               provincia:
 *                 type: string
 *               pais:
 *                 type: string
 *               complemento:
 *                 type: string
 *               cep:
 *                 type: string
 *               coordenadas_latitude:
 *                 type: string
 *               coordenadas_longitude:
 *                 type: string
 *             required:
 *               - rua
 *               - cidade
 *     responses:
 *       201:
 *         description: Endereço criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       400:
 *         description: Dados inválidos
 */
router.post('/', (req, res) => addressController.create(req, res));

/**
 * @swagger
 * /addresses/{id}:
 *   put:
 *     summary: Atualizar um endereço
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       200:
 *         description: Endereço atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       404:
 *         description: Endereço não encontrado
 */
router.put('/:id', (req, res) => addressController.update(req, res));

/**
 * @swagger
 * /addresses/{id}:
 *   delete:
 *     summary: Remover um endereço
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço
 *     responses:
 *       204:
 *         description: Endereço removido
 *       404:
 *         description: Endereço não encontrado
 */
router.delete('/:id', (req, res) => addressController.delete(req, res));

module.exports = router;
