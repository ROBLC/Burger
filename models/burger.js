var orm = require("../config/orm.js");

var burger = {
    all: function (callBack) {
        orm.selectAll("burgers", function (res) {
            callBack(res);
        });
    },
    create: function (cols, vals, callBack) {
        orm.insertOne("burgers", cols, vals, function (res) {
            callBack(res);
        });
    },
    update: function (state, condition, callBack) {
        console.log("state in models" + state);
        orm.updateOne("burgers", state, condition, function (res) {
            callBack(res);
        });
    }
};

module.exports = burger
