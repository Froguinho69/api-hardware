// Importa o modelo Processador do diretório models
const Processador = require('../models/Processador');

// Função assíncrona para criar um novo processador
async function create(req, res) {
    try {
        // Cria uma nova instância de Processador com os dados do corpo da requisição
        const processador = new Processador(req.body);
        // Salva o novo processador no banco de dados
        const processadorCriado = await processador.save();
        // Retorna uma resposta de sucesso com status 201 e os dados do processador criado
        res.status(201).json({
            mensagem: "Processador criado com sucesso",
            processador: processadorCriado
        });
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao criar processador", erro: error });
    }
}

// Função assíncrona para buscar todos os processadores
async function getAll(req, res) {
    try {
        // Busca todos os processadores no banco de dados
        const processadores = await Processador.find();
        // Retorna uma resposta com os dados dos processadores encontrados
        res.json(processadores);
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar processadores", erro: error });
    }
}

// Função assíncrona para buscar um processador por ID
async function getById(req, res) {
    try {
        // Busca um processador pelo ID fornecido nos parâmetros da requisição
        const processador = await Processador.findById(req.params.id);
        if (processador) {
            // Se encontrado, retorna o processador
            res.json(processador);
        } else {
            // Se não encontrado, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Processador não encontrado!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar processador", erro: error });
    }
}

// Função assíncrona para atualizar um processador por ID
async function update(req, res) {
    try {
        // Atualiza o processador pelo ID fornecido nos parâmetros da requisição com os dados do corpo da requisição
        const processadorAtualizado = await Processador.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (processadorAtualizado) {
            // Se encontrado e atualizado, retorna o processador atualizado
            res.json(processadorAtualizado);
        } else {
            // Se não encontrado, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Processador não encontrado!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao atualizar processador", erro: error });
    }
}

// Função assíncrona para remover um processador por ID
async function remove(req, res) {
    try {
        // Remove o processador pelo ID fornecido nos parâmetros da requisição
        const processadorExcluido = await Processador.findByIdAndDelete(req.params.id);
        if (processadorExcluido) {
            // Se encontrado e removido, retorna uma mensagem de sucesso e os dados do processador excluído
            res.json({
                mensagem: "Processador excluído com sucesso!",
                processadorExcluido
            });
        } else {
            // Se não encontrado, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Processador não encontrado!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao excluir processador", erro: error });
    }
}

// Função assíncrona para comparar dois processadores por ID
async function compare(req, res) {
    try {
        // Obtém os dois IDs dos parâmetros da requisição
        const { id1, id2 } = req.params;
        // Busca os dois processadores pelo ID
        const processador1 = await Processador.findById(id1);
        const processador2 = await Processador.findById(id2);

        if (processador1 && processador2) {
            // Se ambos encontrados, retorna os dados dos dois processadores
            res.json({ processador1, processador2 });
        } else {
            // Se um ou ambos não encontrados, retorna uma resposta de erro com status 404
            res.status(404).json({ mensagem: "Um ou ambos os processadores não foram encontrados!" });
        }
    } catch (error) {
        // Em caso de erro, retorna uma resposta de erro com status 500 e a mensagem de erro
        res.status(500).json({ mensagem: "Erro ao buscar processadores para comparação", erro: error });
    }
}

// Exporta as funções para serem usadas em outras partes da aplicação
module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
    compare,
};
