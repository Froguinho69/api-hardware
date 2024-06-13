const mongoose = require('mongoose');

const placaDeVideoSchema = new mongoose.Schema({
    modelo: {
        type: String,
        require: true
    },
    fabricante: {
        type: String,
        require: true
    },
    memoria: {
        type: String,
        require: true
    },
    clock: {
        type: String,
        require: true
    },
    consumo: {
        type: String,
        require: true
    },
}, 
{ timestamps: true });

module.exports = mongoose.model('PlacaDeVideo', placaDeVideoSchema);
