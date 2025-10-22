const express = require('express');
const router = express.Router();
const controller = require('../../controllers/commercial/clients_controller');

/**
 * @swagger
 * tags:
 *   name: Cliente
 *   description: Gestão de Clientes
 */

router.get('/all', controller.listar);
/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Cliente]
 */

router.get('/getById/:id', controller.buscarPorId);
/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     summary: Busca cliente por ID
 *     tags: [Cliente]
 */

router.post('/create', controller.criar);
/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um cliente
 *     tags: [Cliente]
 */

router.put('/update/:id', controller.atualizar);
/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualiza cliente
 *     tags: [Cliente]
 */

router.delete('/delete/:id', controller.remover);
/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Remove cliente
 *     tags: [Cliente]
 */

module.exports = router;
