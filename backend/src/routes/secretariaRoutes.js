const express = require('express');
const router = express.Router();
const SecretariaController = require('../controllers/secretariaController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/', authMiddleware, roleMiddleware(3), SecretariaController.create);
router.get('/', authMiddleware, SecretariaController.getAll);
router.get('/:id', authMiddleware, SecretariaController.getById);
router.put('/:id', authMiddleware, roleMiddleware(3), SecretariaController.update);
router.delete('/:id', authMiddleware, roleMiddleware(3), SecretariaController.delete);

module.exports = router;