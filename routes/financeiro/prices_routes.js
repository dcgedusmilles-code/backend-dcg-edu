const express = require('express');
const router = express.Router();
const precoController = require('../../controllers/financeiro/prices_controller');

router.post('/', precoController.create);
router.get('/', precoController.list);
router.get('/:id', precoController.get);
router.put('/:id', precoController.update);
router.delete('/:id', precoController.remove);

module.exports = router;
