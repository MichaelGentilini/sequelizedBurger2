var orm = require("../config/orm.js");


// ? need to require userinput for value for burgerId

// ! Display all burgers
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // ! create a new burger
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // ! eat a burger
  updateOne: function (cols, condition, cb) {
    orm.updateOne("burgers", cols, condition, function (res) {
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  }

};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;