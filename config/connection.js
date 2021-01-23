// Require external npm packages
const mysql = require("mysql");

module.exports = {
    connect: function () {
        // Declare connection
        const connection;

        // Create connection
        if (process.env.JAWSDB_URL) {
            connection = mysql.createConnection(process.env.JAWSDB_URL);
        } else {
            connection = mysql.createConnection({
                host: "localhost",
                port: 3306,
                user: "root",
                password: "Procmi*1", // ADD DATABASE PASSWORD
                database: "burgers_db" // ADD DATABASE NAME
            });
        }

        // Make connection
        connection.connect(function (err) {
            if (err) {
                console.error("error connecting: " + err.stack);
                return;
            }

            console.log("Database connected as id: " + connection.threadId);
        });
    }
}
