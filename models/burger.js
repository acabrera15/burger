var orm = require("../config/orm");

var burgerModel = {
  selectAllBugers: function(toDo) {
    orm.selectAll("burgers", toDo);
  },
  insertBurger: function(burger, toDo) {
    orm.insertOne("burgers", ["burger_name"], [burger], toDo);
  },
  updateBurger: function(id, toDo) {
    orm.updateOne("burgers", {devoured: true}, `id = ${id}`, toDo);
  }
};

module.exports = burgerModel;
