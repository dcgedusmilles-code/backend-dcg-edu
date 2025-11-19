const router = require('express').Router();
import { GeographyController } from "../../controllers/user/geography.controller";

const controller = new GeographyController();

/**
 * @swagger
 * /api/geography/provincias:
 *   get:
 *     summary: Lista todas províncias
 *     tags: [Geografia]
 *     responses:
 *       200:
 *         description: Lista de províncias
 */
router.get("/provincias", controller.provincias);

/**
 * @swagger
 * /api/geography/municipios:
 *   get:
 *     summary: Lista municípios de uma província
 *     tags: [Geografia]
 *     parameters:
 *       - in: query
 *         name: provincia
 *         required: true
 *         description: Nome da província
 *     responses:
 *       200:
 *         description: Lista de municípios
 */
router.get("/municipios", controller.municipios);

export default router;
