var Configuration = require("../model/configuration.js");

exports.list_all_config = function(req, res) {
  Configuration.getAllConfig(function(err, configuration) {
    if (err) res.send(err);
    res.send({data: configuration});
  });
};

exports.read_a_config = function(req, res) {
  Configuration.getConfigurationById(req.params.id, function(
    err,
    configuration
  ) {
    if (err) res.send(err);
    res.json({data: configuration});
  });
};

