// Importa o modelo Armazenamento do diretório models
const Armazenamento = require('../models/Armazenamento');

// Função assíncrona para criar um novo armazenamento
async function create(req, res) {
    try {
        // Cria uma nova instância de Armazenamento com os dados do corpo da requisição
        const armazenamento = new Armazenamento(req.body);
        // Salva o novo armazenamento no banco de dados
        const armazenamentoCriado = await armazenamento.save();
        // Retorna uma resposta de sucesso com status 201 e os dados do armazenamento criado
        res.status(201).json({
            mensagem: "Armazenamento criado com sucesso",
            armazenamento: armazenamentoCriado
        });
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao criar Armazenamento", erro: error });
    }
}

// Função assíncrona para buscar todos os armazenamentos
async function getAll(req, res) {
    try {
        // Busca todos os armazenamentos no banco de dados
        const armazenamentos = await Armazenamento.find();
        // Retorna uma resposta com os dados dos armazenamentos encontrados
        res.json(armazenamentos);
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar Armazenamentos", erro: error });
    }
}

// Função assíncrona para buscar um armazenamento por ID
async function getById(req, res) {
    try {
        // Busca um armazenamento pelo ID fornecido nos parâmetros da requisição
        const armazenamento = await Armazenamento.findById(req.params.id);
        if (armazenamento) {
            // Se encontrado, retorna o armazenamento
            res.json(armazenamento);
        } else {
            // Se não encontrado, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Armazenamento não encontrado!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar Armazenamento", erro: error });
    }
}

// Função assíncrona para atualizar um armazenamento por ID
async function update(req, res) {
    try {
        // Atualiza o armazenamento pelo ID fornecido nos parâmetros da requisição com os dados do corpo da requisição
        const armazenamentoAtualizado = await Armazenamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (armazenamentoAtualizado) {
            // Se encontrado e atualizado, retorna o armazenamento atualizado
            res.json(armazenamentoAtualizado);
        } else {
            // Se não encontrado, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Armazenamento não encontrado!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao atualizar Armazenamento", erro: error });
    }
}

// Função assíncrona para remover um armazenamento por ID
async function remove(req, res) {
    try {
        // Remove o armazenamento pelo ID fornecido nos parâmetros da requisição
        const armazenamentoExcluido = await Armazenamento.findByIdAndDelete(req.params.id);
        if (armazenamentoExcluido) {
            // Se encontrado e removido, retorna uma mensagem de sucesso e os dados do armazenamento excluído
            res.json({
                mensagem: "Armazenamento excluído com sucesso!",
                armazenamentoExcluido
            });
        } else {
            // Se não encontrado, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Armazenamento não encontrado!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao excluir Armazenamento", erro: error });
    }
}

// Função assíncrona para comparar dois dispositivos de armazenamento por ID
async function compare(req, res) {
    try {
        // Obtém os dois IDs dos parâmetros da requisição
        const { id1, id2 } = req.params;
        // Busca os dois armazenamentos pelo ID
        const armazenamento1 = await Armazenamento.findById(id1);
        const armazenamento2 = await Armazenamento.findById(id2);

        if (armazenamento1 && armazenamento2) {
            // Se ambos encontrados, retorna os dados dos dois armazenamentos
            res.json({ armazenamento1, armazenamento2 });
        } else {
            // Se um ou ambos não encontrados, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Um ou ambos os dispositivos de armazenamento não foram encontrados!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar dispositivos de armazenamento para comparação", erro: error });
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
