'use strict'
var Project = require('../models/projects')
var fs = require('fs');
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
        var params = req.body;

        project.name = params.name;
        project.descripcion = params.descripcion;
        project.categoria = params.categoria;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err,projectStored)=>{
            if(err){return res.status(500).send({message:'Error en la petición:'+err})};
            if(!projectStored){return res.status(404).send({message:'No se a podido guardar el proyecto'})};

            return res.status(200).send({project: projectStored});
        });
    },
    getProject: function(req,res){
        var projectId = req.params.id;

        if(projectId==null){
           return res.status(404).send({message:'El proyecto no existe'});
        }

        Project.findById(projectId,(err,project)=>{
            if(err){return res.status(500).send({message:'Error al devolver los datos :'+err})};
            if(!project){return res.status(404).send({message:'El proyecto no existe'})};
            return res.status(200).send({project});
        });
    },
    getProjects: function(req,res){
        Project.find({}).exec((err,projects)=>{
            if(err){return res.status(500).send({message:'Error al devolver los datos :'+err})};
            if(!projects){return res.status(404).send({message:'No hay proyectos para mostrar'})};
            return res.status(200).send({projects});
        })
    },
    updateProject: function(req,res){
        var projectId=req.params.id;
        var update= req.body;

        Project.findOneAndUpdate(projectId,update,{new:true},(err,projectUpdated)=>{
            if(err){return res.status(500).send({message:'Error al Actualizar :'+err})};
            if(!projectUpdated){return res.status(404).send({message:'No existe el proyecto a actualizar'})};
            return res.status(200).send({project:projectUpdated});
        });
    },
    deleteProject: function(req,res){
        var projectId = req.params.id;
        Project.findByIdAndRemove(projectId,(err,projectRemoved)=>{
            if(err){return res.status(500).send({message:'No se ha podido eliminar el proyecto'+err})};
            if(!projectRemoved){return res.status(404).send({message:'No existe el documento'})};
            return res.status(200).send({project:projectRemoved});
        });
    },
    uploadImage:function(req,res){
        var projectId=req.params.id;
        var fileName='Imagen no subida...';

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if(fileExt=='png'||fileExt=='jpg'||fileExt=='jpeg'||fileExt=='gif'){

                Project.findByIdAndUpdate(projectId,{image:fileName},{new:true},(err,projectUpdatedImg)=>{
                    if(err){return res.status(500).send({message:'La imagen no se ha subido'+err})};
                    if(!projectUpdatedImg){return res.status(404).send({message:'El proyecto no existe'})};
                    return res.status(200).send({project:projectUpdatedImg});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extencion no es válida'});
                })
            }
        }else{
            return res.status(200).send({files:fileName});
        }
    },

};

module.exports = controller;