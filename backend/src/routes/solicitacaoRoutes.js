const express = require('express');
const router = express.Router();
const SolicitacaoController = require('../controllers/solicitacaoController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/', authMiddleware, SolicitacaoController.create);
router.get('/', authMiddleware, SolicitacaoController.getAll);
router.get('/:id', authMiddleware, SolicitacaoController.getById);
router.put('/:id', authMiddleware, roleMiddleware(2), SolicitacaoController.update);
router.delete('/:id', authMiddleware, roleMiddleware(3), SolicitacaoController.delete);
router.get('/cidadao/:cidadaoId', authMiddleware, SolicitacaoController.getByCidadao);
router.get('/secretaria/:secretariaId', authMiddleware, roleMiddleware(2), SolicitacaoController.getBySecretaria);

module.exports = router;