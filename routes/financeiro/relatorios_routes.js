const express = require('express');
const router = express.Router();
const controller = require('../../controllers/financeiro/relatorio_financeiro_controller');

router.post('/financeiro/relatorio', controller.gerar);

module.exports = router;
