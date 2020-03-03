const express = require('express'); //importação do expresse
const app = express(); //atribuir a chamada da função 'express()' a const 'app'
const BodyParser = require('body-parser');
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

const { tb_registros } = require('./app/models');

//tb_registros.create({ idoso: '2', estudantes:'15', internet: '6', normal: '20', horarios:'08:00:00', total:'43' });

app.listen(3000); //porta a qual o servidor vai rodar