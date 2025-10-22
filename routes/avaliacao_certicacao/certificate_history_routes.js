const express = require('express');
const router = express.Router();
const HistoricoCertificadoController = require('../../controllers/avaliacao_certicacao/certificate_history_controller');


/**
 * @swagger
 * tags:
 *   name: HistoricoCertificados
 *   description: Histórico de ações realizadas nos certificados
 */

/**
 * @swagger
 * /historicos:
 *   get:
 *     summary: Listar todos os históricos
 *     tags: [HistoricoCertificados]
 */
router.get('/all', HistoricoCertificadoController.index);

/**
 * @swagger
 * /historicos/{id}:
 *   get:
 *     summary: Obter um histórico específico
 *     tags: [HistoricoCertificados]
 */
router.get('/getById/:id', HistoricoCertificadoController.show);

/**
 * @swagger
 * /historicos:
 *   post:
 *     summary: Criar um histórico
 *     tags: [HistoricoCertificados]
 */
router.post('/create/', HistoricoCertificadoController.create);

/**
 * @swagger
 * /historicos/{id}:
 *   put:
 *     summary: Atualizar um histórico
 *     tags: [HistoricoCertificados]
 */
router.put('/update/:id', HistoricoCertificadoController.update);

/**
 * @swagger
 * /historicos/{id}:
 *   delete:
 *     summary: Remover um histórico
 *     tags: [HistoricoCertificados]
 */
router.delete('/delete/:id', HistoricoCertificadoController.delete);

module.exports = router;
