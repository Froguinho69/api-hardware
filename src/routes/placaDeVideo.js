const express = require('express');
const router = express.Router();
const PlacaDeVideoController = require('../controllers/PlacaDeVideoController');

// Rota para criar placa de vídeo
router.post('/placasdevideo', PlacaDeVideoController.create);

// Rota para obter todas as placas de vídeo
router.get('/placasdevideo', PlacaDeVideoController.getAll);

// Rota para obter uma placa de vídeo por ID
router.get('/placasdevideo/:id', PlacaDeVideoController.getById);

// Rota para atualizar uma placa de vídeo por ID
router.put('/placasdevideo/:id', PlacaDeVideoController.update);

// Rota para remover uma placa de vídeo por ID
router.delete('/placasdevideo/:id', PlacaDeVideoController.remove);

// Rota para comparar duas placas de vídeo
router.get('/placasDeVideo/compare/:id1/:id2', PlacaDeVideoController.compare);

module.exports = router;

//Exemplo de busca http://localhost:3000/api/placasDeVideo/compare/{id1}/{id2}