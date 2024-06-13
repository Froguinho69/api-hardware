const express = require('express');
const router = express.Router();
const ArmazenamentoController = require('../controllers/ArmazenamentoController');

// Rota para criar armazenamento
router.post('/armazenamentos', ArmazenamentoController.create);

// Rota para obter todos os armazenamentos
router.get('/armazenamentos', ArmazenamentoController.getAll);

// Rota para obter um armazenamento por ID
router.get('/armazenamentos/:id', ArmazenamentoController.getById);

// Rota para atualizar um armazenamento por ID
router.put('/armazenamentos/:id', ArmazenamentoController.update);

// Rota para remover um armazenamento por ID
router.delete('/armazenamentos/:id', ArmazenamentoController.remove);

// Rota para comparar dois armazenamentos
router.get('/armazenamentos/compare/:id1/:id2', ArmazenamentoController.compare);

module.exports = router;

//Exemplo de busca http://localhost:3000/api/armazenamentos/compare/{id1}/{id2}