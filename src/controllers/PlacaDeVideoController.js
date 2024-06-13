// Importa o modelo PlacaDeVideo do diretório models
const PlacaDeVideo = require('../models/PlacaDeVideo');

// Função assíncrona para criar uma nova placa de vídeo
async function create(req, res) {
    try {
        // Cria uma nova instância de PlacaDeVideo com os dados do corpo da requisição
        const placaDeVideo = new PlacaDeVideo(req.body);
        // Salva a nova placa de vídeo no banco de dados
        const placaCriada = await placaDeVideo.save();
        // Retorna uma resposta de sucesso com status 201 e os dados da placa de vídeo criada
        res.status(201).json({
            mensagem: "Placa de vídeo criada com sucesso",
            placa: placaCriada
        });
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao criar placa de vídeo", erro: error });
    }
}

// Função assíncrona para buscar todas as placas de vídeo
async function getAll(req, res) {
    try {
        // Busca todas as placas de vídeo no banco de dados
        const placas = await PlacaDeVideo.find();
        // Retorna uma resposta com os dados das placas de vídeo encontradas
        res.json(placas);
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar placas de vídeo", erro: error });
    }
}

// Função assíncrona para buscar uma placa de vídeo por ID
async function getById(req, res) {
    try {
        // Busca uma placa de vídeo pelo ID fornecido nos parâmetros da requisição
        const placa = await PlacaDeVideo.findById(req.params.id);
        if (placa) {
            // Se encontrada, retorna a placa de vídeo
            res.json(placa);
        } else {
            // Se não encontrada, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Placa de vídeo não encontrada!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar placa de vídeo", erro: error });
    }
}

// Função assíncrona para atualizar uma placa de vídeo por ID
async function update(req, res) {
    try {
        // Atualiza a placa de vídeo pelo ID fornecido nos parâmetros da requisição com os dados do corpo da requisição
        const placaAtualizada = await PlacaDeVideo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (placaAtualizada) {
            // Se encontrada e atualizada, retorna a placa de vídeo atualizada
            res.json(placaAtualizada);
        } else {
            // Se não encontrada, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Placa de vídeo não encontrada!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao atualizar placa de vídeo", erro: error });
    }
}

// Função assíncrona para remover uma placa de vídeo por ID
async function remove(req, res) {
    try {
        // Remove a placa de vídeo pelo ID fornecido nos parâmetros da requisição
        const placaExcluida = await PlacaDeVideo.findByIdAndDelete(req.params.id);
        if (placaExcluida) {
            // Se encontrada e removida, retorna uma mensagem de sucesso e os dados da placa de vídeo excluída
            res.json({
                mensagem: "Placa de vídeo excluída com sucesso!",
                placaExcluida
            });
        } else {
            // Se não encontrada, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Placa de vídeo não encontrada!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao excluir placa de vídeo", erro: error });
    }
}

// Função assíncrona para comparar duas placas de vídeo por ID
async function compare(req, res) {
    try {
        // Obtém os dois IDs dos parâmetros da requisição
        const { id1, id2 } = req.params;
        // Busca as duas placas de vídeo pelo ID
        const placaDeVideo1 = await PlacaDeVideo.findById(id1);
        const placaDeVideo2 = await PlacaDeVideo.findById(id2);

        if (placaDeVideo1 && placaDeVideo2) {
            // Se ambas encontradas, retorna os dados das duas placas de vídeo
            res.json({ placaDeVideo1, placaDeVideo2 });
        } else {
            // Se uma ou ambas não encontradas, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Uma ou ambas as placas de vídeo não foram encontradas!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar placas de vídeo para comparação", erro: error });
    }
}

// Exporta as funções para serem usadas em outras partes da aplicação
module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
    compare
};
