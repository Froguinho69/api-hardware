const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Rota para criar usuário
router.post('/usuarios', UserController.create);

// Rota para obter todos os usuários
router.get('/usuarios', UserController.getAll);

// Rota para obter um usuário por ID
router.get('/usuarios/:id', UserController.getById);

// Rota para atualizar um usuário por ID
router.put('/usuarios/:id', UserController.update);

// Rota para remover um usuário por ID
router.delete('/usuarios/:id', UserController.remove);

module.exports = router;