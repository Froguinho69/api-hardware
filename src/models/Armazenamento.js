const mongoose = require('mongoose');

const armazenamentoSchema = new mongoose.Schema({
    modelo: {
        type: String,
        require: true
    },
    fabricante: {
        type: String,
        require: true
    },
    tipo:  {
        type: String,
        require: true
    },
    capacidade:  {
        type: String,
        require: true
    },
    interface:  {
        type: String,
        require: true
    }
}, 
{ timestamps: true });

module.exports = mongoose.model('Armazenamento', armazenamentoSchema);