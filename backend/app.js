'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar archivos rutas 
var project_routes = require('./routes/projects');
//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Rutas
app.use('/',project_routes);

//exportar


module.exports = app;