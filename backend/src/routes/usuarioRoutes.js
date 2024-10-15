const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/register', UsuarioController.create);
router.post('/login', UsuarioController.login);
router.get('/', authMiddleware, roleMiddleware(3), UsuarioController.getAll);
router.get('/:id', authMiddleware, roleMiddleware(3), UsuarioController.getById);
router.put('/:id', authMiddleware, roleMiddleware(3), UsuarioController.update);
router.delete('/:id', authMiddleware, roleMiddleware(3), UsuarioController.delete);

module.exports = router;