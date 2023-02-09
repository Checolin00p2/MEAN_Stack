'use strict'
var Project = require('../models/projects')

var controller = {
    home: function(req,res){
        return res.status(200).send({
            message:'Home'
        });
    },
    test: function(req,res){
        return res.status(200).send({
            message:'Metodo test del controlador project'
        });
    },
    saveProject: function(req,res){
        var project = new Project();

        return res.status(200).send({
            message: "Metodo SaveProject"
        })
    }

};

module.exports = controller;