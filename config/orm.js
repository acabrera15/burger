var connection = require("./connection");

var ORM = {
  selectAll: function() {
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;

      return res;
    });
  },

  insertOne: function(newBurger) {
    connection.query(
      "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)",
      [newBurger],
      function(err, res) {
        if (err) throw err;
        console.log(res);
        return res;
      }
    );
  },

  updateOne: function() {
      //update SQL
  }
};

module.exports = ORM;