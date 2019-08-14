var request = require('request');
var url = require("url");

var HealthCheck = function(health) {
  this.health = health.health;
  this.status = health.status;
  this.url = health.url;
};

HealthCheck.checkStatus = function(urlParam, result) {
  var valid = url.parse('http://'+urlParam);
  if(valid != null){
    request({method: 'HEAD', url: 'http://'+urlParam}, function (error, response, body) {
      if(error != null){
	error.error = true;
        console.log('error:', error);
        result([error], null);
      }else{
        result(null,[{error: false, statusCode: response.statusCode, url: urlParam}]);
      }
    });
  }else{
    result([{error:true,message: 'Invalid URI'}], null);
  }
};

module.exports = HealthCheck;

