'use strict'

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
    }

};

module.exports = controller;