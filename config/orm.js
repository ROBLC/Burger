var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
};

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
    insertOne: function (table, cols, vals, callBack) {
        var mysqlQuery = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ");";
        connection.query(mysqlQuery, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },
    updateOne: function (table, state, condition, callBack) {
        var sqlState = objToSql(state);
        var mysqlQuery = "UPDATE " + table + " SET " + sqlState + " WHERE " + condition + ";";
        console.log(mysqlQuery);
        connection.query(mysqlQuery, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    }
};

module.exports = orm;