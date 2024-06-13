const mongoose = require('mongoose')
require('dotenv').config()


function main() {
    mongoose.connect(`mongodb+srv://lrodrigues:8WuemCEF2qZ8askz@project0.n8pm4bx.mongodb.net/?retryWrites=true&w=majority&appName=Project0`)
        .then(() => console.log("Conectado!"))
        .catch(err => console.log("Erro ao conectar ao banco: ", err))
}


module.exports = main
