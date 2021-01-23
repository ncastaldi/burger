const connection = requires("./connection.js");

const orm = {
    selectAll: function () {
        const queryString = `SELECT * FROM burgers;`;

        connection.query(queryString, function (err, data) {
            if (err) throw err;

            console.log(data);
        })
    }
};

module.exports = orm;