// Require local depenancies
const orm = require("../config/orm");

let burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    }
}

// Export the database functions for the controller
module.exports = burger;