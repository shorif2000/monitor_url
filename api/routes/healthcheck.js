var express = require('express');
var router = express.Router();

var actions = require('../controller/appController');

router.get('/:url',  actions.check_status); 
router.get('/:url/:a',  actions.check_status);
router.get('/:url/:b',  actions.check_status);

module.exports = router;
