const mongoose = require('mongoose');

const processadorSchema = new mongoose.Schema({
    modelo: {
        type: String,
        require: true
    },
    fabricante: {
        type: String,
        require: true
    },
    nucleos: {
        type: Number,
        require: true
    }, 
    threads: {
        type: Number,
        require: true
    }, 
    clockBase: {
        type: String,
        require: true
    },
    clockTurbo: {
        type: String,
        require: true
    },
    consumo: {
        type: String,
        require: true
    },
}, 
{ timestamps: true });

module.exports = mongoose.model('Processador', processadorSchema);
