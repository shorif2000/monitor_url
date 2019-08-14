var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');

var actions = require('../controller/appController');

router.get('/config', actions.list_all_config); 

router.get('/config/:id',  actions.read_a_config); 

module.exports = router;
