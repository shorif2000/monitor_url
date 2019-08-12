var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');

/* GET on load. */
router.get('/', function(req, res, next) {
      
 connection.query('SELECT * FROM v_configuration ORDER BY name desc',function(err,rows)     {
 
	if(err){
	 res.render('configuration',{data:''});   
	}else{
	  res.render('configuration',{data:rows});
	}
  });
	
});
