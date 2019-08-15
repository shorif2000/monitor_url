var express = require('express');
var router = express.Router();

var actions = require('../controller/appController');

router.get('/', actions.list_all_groups); 

module.exports = router;
