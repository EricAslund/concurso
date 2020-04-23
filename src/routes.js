const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const CorrecoesController = require('./controllers/CorrecoesController');
const ReservadasController = require('./controllers/ReservadasController');

const routes = express.Router();

routes.get('/correcoes/proxima', CorrecoesController.index);

// routes.post('/correcoes/:idCorrecao', CorrecoesController.alter);

// routes.post('/correcoes/reservadas/:idCorrecao', ReservadasController.create);

// routes.get('/correcoes/reservadas', ReservadasController.index);

module.exports = routes;