// Importa o modelo MemoriaRam do diretório models
const MemoriaRam = require('../models/MemoriaRam');

// Função assíncrona para criar uma nova memória RAM
async function create(req, res) {
    try {
        // Cria uma nova instância de MemoriaRam com os dados do corpo da requisição
        const memoriaRam = new MemoriaRam(req.body);
        // Salva a nova memória RAM no banco de dados
        const memoriaRamCriada = await memoriaRam.save();
        // Retorna uma resposta de sucesso com status 201 e os dados da memória RAM criada
        res.status(201).json({
            mensagem: "Memória RAM criada com sucesso",
            memoriaRam: memoriaRamCriada
        });
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao criar Memória RAM", erro: error });
    }
}

// Função assíncrona para buscar todas as memórias RAM
async function getAll(req, res) {
    try {
        // Busca todas as memórias RAM no banco de dados
        const memoriasRam = await MemoriaRam.find();
        // Retorna uma resposta com os dados das memórias RAM encontradas
        res.json(memoriasRam);
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar Memórias RAM", erro: error });
    }
}

// Função assíncrona para buscar uma memória RAM por ID
async function getById(req, res) {
    try {
        // Busca uma memória RAM pelo ID fornecido nos parâmetros da requisição
        const memoriaRam = await MemoriaRam.findById(req.params.id);
        if (memoriaRam) {
            // Se encontrada, retorna a memória RAM
            res.json(memoriaRam);
        } else {
            // Se não encontrada, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Memória RAM não encontrada!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar Memória RAM", erro: error });
    }
}

// Função assíncrona para atualizar uma memória RAM por ID
async function update(req, res) {
    try {
        // Atualiza a memória RAM pelo ID fornecido nos parâmetros da requisição com os dados do corpo da requisição
        const memoriaRamAtualizada = await MemoriaRam.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (memoriaRamAtualizada) {
            // Se encontrada e atualizada, retorna a memória RAM atualizada
            res.json(memoriaRamAtualizada);
        } else {
            // Se não encontrada, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Memória RAM não encontrada!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao atualizar Memória RAM", erro: error });
    }
}

// Função assíncrona para remover uma memória RAM por ID
async function remove(req, res) {
    try {
        // Remove a memória RAM pelo ID fornecido nos parâmetros da requisição
        const memoriaRamExcluida = await MemoriaRam.findByIdAndDelete(req.params.id);
        if (memoriaRamExcluida) {
            // Se encontrada e removida, retorna uma mensagem de sucesso e os dados da memória RAM excluída
            res.json({
                mensagem: "Memória RAM excluída com sucesso!",
                memoriaRamExcluida
            });
        } else {
            // Se não encontrada, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Memória RAM não encontrada!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao excluir Memória RAM", erro: error });
    }
}

// Função assíncrona para comparar duas memórias RAM por ID
async function compare(req, res) {
    try {
        // Obtém os dois IDs dos parâmetros da requisição
        const { id1, id2 } = req.params;
        // Busca as duas memórias RAM pelo ID
        const memoriaRam1 = await MemoriaRam.findById(id1);
        const memoriaRam2 = await MemoriaRam.findById(id2);

        if (memoriaRam1 && memoriaRam2) {
            // Se ambas encontradas, retorna os dados das duas memórias RAM
            res.json({ memoriaRam1, memoriaRam2 });
        } else {
            // Se uma ou ambas não encontradas, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Uma ou ambas as memórias RAM não foram encontradas!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar memórias RAM para comparação", erro: error });
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
