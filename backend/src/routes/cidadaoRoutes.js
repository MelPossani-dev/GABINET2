const express = require('express');
const router = express.Router();
const CidadaoController = require('../controllers/cidadaoController');

router.post('/', CidadaoController.create);
router.get('/', CidadaoController.getAll);
router.get('/:id', CidadaoController.getById);
router.put('/:id', CidadaoController.update);
router.delete('/:id', CidadaoController.delete);

module.exports = router;