var orm = require('../config/orm');

var burgerModel = {
    selectAllBugers: function() {
        orm.selectAll("burgers", function(a) {
            console.log(a);
        });
    }
}

burgerModel.selectAllBugers();