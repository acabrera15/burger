var orm = require("../config/orm");

var burgerModel = {
  selectAllBugers: function(toDo) {
    orm.selectAll("burgers", toDo);
  },
  insertBurger: function(burger, toDo) {
    orm.insertOne(
      "burgers",
      ["burger_name"],
      [burger],
      toDo
    );
  },
  updateBurger: function(burgerObj, condition) {
      orm.updateOne('burgers', burgerObj, condition, function(a) {
          console.log(a);
      })
  }
};

module.exports = burgerModel;