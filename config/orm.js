var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, callBack) {
        var mysqlQuery = "SELECT * FROM " + table + ";";
        connection.query(mysqlQuery, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },
    insertOne: function (table, col, name, callBack) {
        var mysqlQuery = "INSERT INTO " + table + " (" + col + ") VALUES (" + name + ");";
        connection.query(mysqlQuery, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },
    updateOne: function (table, col, state, callBack) {
        var mysqlQuery = "UPDATE " + table + " SET " + state + " WHERE " + col + ";";
        connection.query(mysqlQuery, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    }
};

module.exports = orm;