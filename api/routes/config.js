var express = require('express');
var router = express.Router();

var actions = require('../controller/appController');

router.get('/', actions.list_all_config); 

router.get('/:id',  actions.read_a_config); 

module.exports = router;
