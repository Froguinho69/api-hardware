const User = require('../models/User');

// Função assíncrona para criar um novo usuário
async function create(req, res) {
    try {
        const user = new User(req.body);
        const userCriado = await user.save();
        res.status(201).json({
            mensagem: "Usuário criado com sucesso",
            user: userCriado
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar usuário", erro: error });
    }
}

// Função assíncrona para buscar todos os usuários
async function getAll(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar usuários", erro: error });
    }
}

// Função assíncrona para buscar um usuário por ID
async function getById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ mensagem: "Usuário não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar usuário", erro: error });
    }
}

// Função assíncrona para atualizar um usuário por ID
async function update(req, res) {
    try {
        const userAtualizado = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (userAtualizado) {
            res.json(userAtualizado);
        } else {
            res.status(404).json({ mensagem: "Usuário não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar usuário", erro: error });
    }
}

// Função assíncrona para remover um usuário por ID
async function remove(req, res) {
    try {
        const userExcluido = await User.findByIdAndDelete(req.params.id);
        if (userExcluido) {
            res.json({
                mensagem: "Usuário excluído com sucesso!",
                userExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Usuário não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir usuário", erro: error });
    }
}

// Exporta as funções para serem usadas em outras partes da aplicação
module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};