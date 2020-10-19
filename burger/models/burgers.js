//import config/orm.js into burger.js

//create the code that will call the ORM functions using burger specific input for the ORM.

//Export the burger object at the end of the burger.js file.

const orm = require("../config/orm.js");

const burger = {
    all: function(callback) {
        orm.all("burgers", function(res) {
            callback(res);
        });
    },
    create: function(name, callback) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], callback);
    },
    update: function(id, callback) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, callback);
    }
};

module.exports = burger;