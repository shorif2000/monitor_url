var Configuration = require("../model/configuration");
var Groups = require("../model/groups.js");
var HealthCheck = require("../model/healthcheck");

exports.list_all_config = (req, res) => {
   Configuration.getAllConfig((err, configuration) => {
    if (err) res.json(err);
    else
      res.json(configuration);
  });
};

exports.read_a_config = (req, res) => {
  Configuration.getConfigurationById(req.params.id, (err, configuration) => {
    if (err) res.json(err);
    else
      res.json(configuration);
  });
};

exports.list_all_groups = (req, res) => {
  Groups.getAllGroups((err, group) => {
    if (err) res.json(err);
    else
      res.json(group);
  });
};

exports.check_status = (req, res) => {
  HealthCheck.checkStatus(req.params.url, (err, health) => {
    if (err) res.json(err);
    else
      res.json(health);
  });
};
