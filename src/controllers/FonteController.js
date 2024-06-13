// Importa o modelo Fonte do diretório models
const Fonte = require('../models/Fonte');

// Função assíncrona para criar uma nova fonte
async function create(req, res) {
    try {
        // Cria uma nova instância de Fonte com os dados do corpo da requisição
        const fonte = new Fonte(req.body);
        // Salva a nova fonte no banco de dados
        const fonteCriada = await fonte.save();
        // Retorna uma resposta de sucesso com status 201 e os dados da fonte criada
        res.status(201).json({
            mensagem: "Fonte criada com sucesso",
            fonte: fonteCriada
        });
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao criar Fonte", erro: error });
    }
}

// Função assíncrona para buscar todas as fontes
async function getAll(req, res) {
    try {
        // Busca todas as fontes no banco de dados
        const fontes = await Fonte.find();
        // Retorna uma resposta com os dados das fontes encontradas
        res.json(fontes);
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar Fontes", erro: error });
    }
}

// Função assíncrona para buscar uma fonte por ID
async function getById(req, res) {
    try {
        // Busca uma fonte pelo ID fornecido nos parâmetros da requisição
        const fonte = await Fonte.findById(req.params.id);
        if (fonte) {
            // Se encontrada, retorna a fonte
            res.json(fonte);
        } else {
            // Se não encontrada, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Fonte não encontrada!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar Fonte", erro: error });
    }
}

// Função assíncrona para atualizar uma fonte por ID
async function update(req, res) {
    try {
        // Atualiza a fonte pelo ID fornecido nos parâmetros da requisição com os dados do corpo da requisição
        const fonteAtualizada = await Fonte.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (fonteAtualizada) {
            // Se encontrada e atualizada, retorna a fonte atualizada
            res.json(fonteAtualizada);
        } else {
            // Se não encontrada, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Fonte não encontrada!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao atualizar Fonte", erro: error });
    }
}

// Função assíncrona para remover uma fonte por ID
async function remove(req, res) {
    try {
        // Remove a fonte pelo ID fornecido nos parâmetros da requisição
        const fonteExcluida = await Fonte.findByIdAndDelete(req.params.id);
        if (fonteExcluida) {
            // Se encontrada e removida, retorna uma mensagem de sucesso e os dados da fonte excluída
            res.json({
                mensagem: "Fonte excluída com sucesso!",
                fonteExcluida
            });
        } else {
            // Se não encontrada, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Fonte não encontrada!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao excluir Fonte", erro: error });
    }
}

// Função assíncrona para comparar duas fontes por ID
async function compare(req, res) {
    try {
        // Obtém os dois IDs dos parâmetros da requisição
        const { id1, id2 } = req.params;
        // Busca as duas fontes pelo ID
        const fonte1 = await Fonte.findById(id1);
        const fonte2 = await Fonte.findById(id2);

        if (fonte1 && fonte2) {
            // Se ambas encontradas, retorna os dados das duas fontes
            res.json({ fonte1, fonte2 });
        } else {
            // Se uma ou ambas não encontradas, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Uma ou ambas as fontes não foram encontradas!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar fontes para comparação", erro: error });
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
