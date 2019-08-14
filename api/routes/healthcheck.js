var express = require('express');
var router = express.Router();

var actions = require('../controller/appController');

router.get('/:url',  actions.check_status); 

module.exports = router;
