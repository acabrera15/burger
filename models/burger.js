var orm = require("../config/orm");

var burgerModel = {
  selectAllBugers: function() {
    orm.selectAll("burgers", function(a) {
      console.log(a);
    });
  },
  insertBurger: function(name, devoured) {
    orm.insertOne(
      "burgers",
      ["burger_name", "devoured"],
      [name, devoured],
      function(a) {
        console.log(a);
      }
    );
  },
  updateBurger: function(burgerObj, condition) {
      orm.updateOne('burgers', burgerObj, condition, function(a) {
          console.log(a);
      })
  }
};

module.exports = burgerModel;