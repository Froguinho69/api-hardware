const express = require('express');
const router = express.Router();
const ProcessadorController = require('../controllers/ProcessadorController');

// Rota para criar processador
router.post('/processadores', ProcessadorController.create);

// Rota para obter todos os processadores
router.get('/processadores', ProcessadorController.getAll);

// Rota para obter um processador por ID
router.get('/processadores/:id', ProcessadorController.getById);

// Rota para atualizar um processador por ID
router.put('/processadores/:id', ProcessadorController.update);

// Rota para remover um processador por ID
router.delete('/processadores/:id', ProcessadorController.remove);

// Rota para comparar dois processadores por ID
router.get('/processadores/compare/:id1/:id2', ProcessadorController.compare);

module.exports = router;

//Exemplo de busca http://localhost:3000/api/processadores/compare/{id1}/{id2}