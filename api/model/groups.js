var sql = require("../lib/db.js");

var Groups = function(groups) {
  this.group = group.group;
  this.id = group.id;
  this.name = group.name;
};

Groups.getAllGroups = result => {
  sql.query("Select * from groups", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Groups;

