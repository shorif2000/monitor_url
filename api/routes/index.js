var express = require('express');
var router = express.Router();


router.use("/config", require("./config"));

router.use("/groups", require("./groups"));

router.use("/health", require("./healthcheck"));

router.get('/', function(req, res, next) {
  res.json({data: { 'index': { title: 'Express' }} });
});


module.exports = router;
