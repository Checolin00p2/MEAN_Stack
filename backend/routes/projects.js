'use strict'

var express = require('express');
var ProjectController = require('../controllers/projects');

var router = express.Router();

router.get('/home',ProjectController.home);
router.get('/test',ProjectController.test);

module.exports= router;