var request = require('request');
var rp = require('request-promise');
var url = require("url");

var HealthCheck = function(health) {
  this.health = health.health;
  this.status = health.status;
  this.url = health.url;
};

HealthCheck.checkStatus = function(urlParam, result) {
  var valid = url.parse('http://'+urlParam);
  if(valid != null){
    console.log('http://'+urlParam)
    var _include_headers = function(body, response, resolveWithFullResponse) {
      return {'headers': response.headers, 'data': body};
    };
    const options = {
      url: `http://${urlParam}`,
      followAllRedirects: true,
      method: 'get',
      gzip: true,
      transform: _include_headers,
      transform2xxOnly: true,
      resolveWithFullResponse: true,
/*      headers: {
        'User-Agent': userAgent
      },*/
    };
    
    rp(options)
      .then( (response) => {

	console.log(response.headers)
/*        if(error != null){
          error.error = true;
          console.log('error:', error);
          result([error], null);
        }else{*/
          result(null,[{error: false, statusCode: response.statusCode, url: urlParam}]);
        //}
      })
      .catch(function (err) {
        console.log(err)
	result([{error:true,message: err.message}], null);
      });
  }else{
    result([{error:true,message: 'Invalid URI'}], null);
  }
};

module.exports = HealthCheck;

