const express = require('express');
const router = express.Router();
const MemoriaRamController = require('../controllers/MemoriaRamController');

// Rota para criar memoria RAM
router.post('/memoriaram', MemoriaRamController.create);

// Rota para obter todas as memorias RAM
router.get('/memoriaram', MemoriaRamController.getAll);

// Rota para obter uma memoria RAM por ID
router.get('/memoriaram/:id', MemoriaRamController.getById);

// Rota para atualizar uma memoria RAM por ID
router.put('/memoriaram/:id', MemoriaRamController.update);

// Rota para remover uma memoria RAM por ID
router.delete('/memoriaram/:id', MemoriaRamController.remove);

// Rota para comparar duas memorias RAM
router.get('/memoriaram/compare/:id1/:id2', MemoriaRamController.compare);

module.exports = router;

//Exemplo de busca http://localhost:3000/api/memoriasRam/compare/{id1}/{id2}