const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
    host: "sql12.freemysqlhosting.net",
    user: "sql12746307",
    password: process.env.DB_PASSWORD,
    database: "sql12746307"
});

function ConnectToDatabase() {
    connection.connect((err) => {
        if(err) {
            console.log("Error connecting to mysql database");
            return;
        }
        console.log("Successfully connected");
    });
};

ConnectToDatabase();

module.exports = connection;