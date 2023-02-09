'use strict'


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    descripcion: String,
    categoria: String,
    year: Number,
    langs:[String]
});

module.exports = mongoose.model('Project',ProjectSchema);
