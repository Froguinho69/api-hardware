const express = require('express');
const router = express.Router();
const FonteController = require('../controllers/FonteController');

// Rota para criar fonte
router.post('/fontes', FonteController.create);

// Rota para obter todas as fontes
router.get('/fontes', FonteController.getAll);

// Rota para obter uma fonte por ID
router.get('/fontes/:id', FonteController.getById);

// Rota para atualizar uma fonte por ID
router.put('/fontes/:id', FonteController.update);

// Rota para remover uma fonte por ID
router.delete('/fontes/:id', FonteController.remove);

// Rota para comparar duas fontes
router.get('/fontes/compare/:id1/:id2', FonteController.compare);

module.exports = router;

//Exemplo de busca http://localhost:3000/api/fontes/compare/{id1}/{id2}