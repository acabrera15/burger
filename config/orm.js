var connection = require("./connection");

var ORM = {
  selectAll: function(table) {
    connection.query("SELECT * FROM ??", [table], function(err, res) {
      if (err) throw err;

      return res;
    });
  },

  insertOne: function(table, variable, value) {
    connection.query(
      "INSERT INTO ?? (??) VALUES (?)",
      [table, variable, value],
      function(err, res) {
        if (err) throw err;
        console.log(res);
        return res;
      }
    );
  },

  updateOne: function(table, variable, value, whereVariable, whereValue) {
    //update SQL
    connection.query(
      "UPDATE ?? SET ?? = ? WHERE ?? = ?",
      [table, variable, value, whereValue, whereValue],
      function(err, res) {
        if (err) throw err;

        return res;
      }
    );
  }
};

module.exports = ORM;
