var sql = require("../lib/db.js");

var Configuration = function(configuration) {
  this.configuration = configuration.configuration;
  this.url = configuration.url;
  this.interval = configuration.interval;
};

Configuration.getAllConfig = result => {
  sql.query("Select * from v_configuration", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Configuration.getConfigurationById = function(id, result) {
  console.log(id);
  sql.query(
    "Select * from v_configuration where group_id = ? ",
    id,
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Configuration;

