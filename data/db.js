const mysql = require("mysql2");
const config = require("../config");

let connection = mysql.createConnection(config.db);
connection.connect(function (err) {
    if (err) {
        console.log(err);
    }

    console.log("mysql connected");
});
module.exports = connection.promise();
