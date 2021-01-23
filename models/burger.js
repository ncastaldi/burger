// Require local depenancies
const orm = require("../config/orm");

let burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;