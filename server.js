// Require external npm packages
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

// Require local depenancies
//const connection = require("./config/connection");

// Decalre instance of ExpressJS
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Middleware
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up default template for Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Declare and make connection to database
//connection.makeConnection();
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Procmi*1", // ADD DATABASE PASSWORD
    database: "burgers_db" // ADD DATABASE NAME
});

// Make connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("Database connected as id: " + connection.threadId);
});

// HTML Routes
app.get("/", function (req, res) {
    const querryString = `SELECT * FROM burgers;`
    connection.query(querryString, function (err, data) {
        res.render("index", { burgers: data });
    });
});
// HTML Routes

// API Routes
// API Routes

// Start Express server
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("The server is listening on: http://localhost:" + PORT);
});