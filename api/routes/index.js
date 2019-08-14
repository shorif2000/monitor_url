var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({data: { 'index': { title: 'Express' }} });
});


var actions = require("../controller/appController");

router.get("/config", actions.list_all_config);

router.get("/config/:id", actions.read_a_config);

module.exports = router;
