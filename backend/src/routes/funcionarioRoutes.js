const express = require('express');
const router = express.Router();
const FuncionarioController = require('../controllers/funcionarioController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/', authMiddleware, roleMiddleware(2), FuncionarioController.create);
router.get('/', authMiddleware, FuncionarioController.getAll);
router.get('/:id', authMiddleware, FuncionarioController.getById);
router.put('/:id', authMiddleware, roleMiddleware(2), FuncionarioController.update);
router.delete('/:id', authMiddleware, roleMiddleware(3), FuncionarioController.delete);

module.exports = router;