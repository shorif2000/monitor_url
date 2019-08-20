var axios = require("axios");
var url = require("url");

var HealthCheck = function(health) {
  this.health = health.health;
  this.status = health.status;
  this.url = health.url;
};

HealthCheck.checkStatus = function(urlParam, result) {
  var valid = url.parse("http://" + urlParam);
  if (valid != null) {
    console.log("http://" + urlParam);
    try {
      axios
        .get("http://" + urlParam)
        .then(response => {
console.log(response)
          if (response.isAxiosError) {
            result([{ error: true, message: "Unknown error" }], null);
          }
          
          console.log("success");
          result(null, [{ error: false, statusCode: response.status}]);
        })
        .catch(error => {
          console.log("error");
          result([{ error: true, message: error.message }], null);
        });
    } catch (error) {
      console.error("getStatus" + error.message);
      result(
        {
          error: true,
          message: error.message,
          statusCode: error.statusCode && error.statusCode
        },
        null
      );
    }
  } else {
    result([{ error: true, message: "Invalid URI" }], null);
  }
};

module.exports = HealthCheck;

