const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const port = 3000;

dotenv.config();

app.use(express.json());

const DBConnect = require('./database/connection');
DBConnect();

// Importar as rotas
const armazenamentoRoutes = require('./routes/armazenamento');
const fonteRoutes = require('./routes/fonte');
const memoriaRamRoutes = require('./routes/memoriaRam');
const placaDeVideoRoutes = require('./routes/placaDeVideo'); 
const processadorRoutes = require('./routes/processador'); 
const userRoutes = require('./routes/user');

// Usar as rotas
app.use('/api', armazenamentoRoutes);
app.use('/api', fonteRoutes);
app.use('/api', memoriaRamRoutes);
app.use('/api', placaDeVideoRoutes);
app.use('/api', processadorRoutes);
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
