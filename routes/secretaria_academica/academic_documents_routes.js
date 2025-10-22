const express = require('express');
const router = express.Router();
const controller = require('../../controllers/secretaria_academica/academic_documents_controller');

/**
 * @swagger
 * tags:
 *   name: DocumentoAcadêmico
 *   description: Gestão de documentos acadêmicos
 */

/**
 * @swagger
 * /documentos:
 *   get:
 *     summary: Lista todos os documentos acadêmicos
 *     tags: [DocumentoAcadêmico]
 *     responses:
 *       200:
 *         description: Lista de documentos
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /documentos/{id}:
 *   get:
 *     summary: Busca um documento acadêmico por ID
 *     tags: [DocumentoAcadêmico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do documento
 *     responses:
 *       200:
 *         description: Documento encontrado
 *       404:
 *         description: Documento não encontrado
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /documentos:
 *   post:
 *     summary: Cria um novo documento acadêmico
 *     tags: [DocumentoAcadêmico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DocumentoAcademico'
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post('/', controller.create);

/**
 * @swagger
 * /documentos/{id}:
 *   put:
 *     summary: Atualiza um documento acadêmico
 *     tags: [DocumentoAcadêmico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Atualizado com sucesso
 *       404:
 *         description: Documento não encontrado
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /documentos/{id}:
 *   delete:
 *     summary: Remove um documento acadêmico
 *     tags: [DocumentoAcadêmico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Removido com sucesso
 */
router.delete('/:id', controller.delete);

module.exports = router;
