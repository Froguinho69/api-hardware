const mongoose = require('mongoose');

const fonteSchema = new mongoose.Schema({
    modelo:  {
        type: String,
        require: true
    },
    fabricante:  {
        type: String,
        require: true
    },
    potencia:  {
        type: String,
        require: true
    },
    certificacao:  {
        type: String,
        require: true
    },
    modular:  {
        type: String,
        require: true
    }
}, 
{ timestamps: true });

module.exports = mongoose.model('Fonte', fonteSchema);
