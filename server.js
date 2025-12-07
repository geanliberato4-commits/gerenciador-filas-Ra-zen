const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/telas'));
app.use('/public', express.static(__dirname + '/public'));
app.listen(3000, ()=> console.log('Servidor rodando na porta 3000'));
