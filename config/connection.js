// Require external npm packages
const mysql = require("mysql");

module.exports = {
    makeConnection: function () {
        // Declare connection to database
        const connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "Procmi*1", // ADD DATABASE PASSWORD
            database: "burgers_db" // ADD DATABASE NAME
        });

        // Make connection to db and log threadID to console
        connection.connect(function (err) {
            if (err) {
                console.error("error connecting: " + err.stack);
                return;
            }

            console.log("Database connected as id: " + connection.threadId);
        });
    }
}


