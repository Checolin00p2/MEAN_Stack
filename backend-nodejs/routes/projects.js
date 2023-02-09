'use strict'

var express = require('express');
var ProjectController = require('../controllers/projects');

var router = express.Router();

var multipart = require('connect-multiparty');
var mulipartMiddleware = multipart({uploadDir: './uploads'});
//GET
router.get('/home',ProjectController.home);
router.get('/project/:id?',ProjectController.getProject);
router.get('/projects',ProjectController.getProjects);
//POST
router.post('/test',ProjectController.test);
router.post('/save-project',ProjectController.saveProject);
router.post('/upload-image/:id',mulipartMiddleware,ProjectController.uploadImage);
//DELETE
router.delete('/project/:id',ProjectController.deleteProject);
//PUT
router.put('/project/:id',ProjectController.updateProject);

module.exports= router;