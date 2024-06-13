const mongoose = require('mongoose');

const memoriaRamSchema = new mongoose.Schema({
    modelo: {
        type: String,
        require: true
    },
    fabricante: {
        type: String,
        require: true
    },
    capacidade: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    velocidade: {
        type: String,
        require: true
    },
    latencia: {
        type: String,
        require: true
    }
}, 
{ timestamps: true });

module.exports = mongoose.model('MemoriaRam', memoriaRamSchema);
