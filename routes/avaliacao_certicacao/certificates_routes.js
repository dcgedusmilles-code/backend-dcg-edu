const express = require('express');
const router = express.Router();
const controller = require('../../controllers/avaliacao_certicacao/certificates_controller');



/**
 * @swagger
 * tags:
 *   name: Certificados
 *   description: Gestão de certificados emitidos
 */

/**
 * @swagger
 * /certificados:
 *   get:
 *     summary: Listar certificados
 *     tags: [Certificados]
 */
router.get('/all', controller.listar);

/**
 * @swagger
 * /certificados/{id}:
 *   get:
 *     summary: Obter certificado por ID
 *     tags: [Certificados]
 */
router.get('/getById/:id', controller.buscarPorId);

/**
 * @swagger
 * /certificados:
 *   post:
 *     summary: Criar um certificado
 *     tags: [Certificados]
 */
router.post('/create', controller.criar);

/**
 * @swagger
 * /certificados/{id}:
 *   put:
 *     summary: Atualizar certificado
 *     tags: [Certificados]
 */
router.put('/update/:id', controller.atualizar);

/**
 * @swagger
 * /certificados/{id}:
 *   delete:
 *     summary: Remover certificado
 *     tags: [Certificados]
 */
router.delete('/delete/:id', controller.remover);

module.exports = router;
