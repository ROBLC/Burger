var orm = require("../config/orm.js");

var burger = {
    all: function (callBack) {
        orm.selectAll("burgers", function (res) {
            callBack(res);
        });
    },
    create: function (name, callBack) {
        orm.insertOne("burgers", "burger_name", name, function (res) {
            callBack(res);
        });
    },
    update: function (state, callBack) {
        orm.updateOne("burgers", "devoured", state, function (res) {
            callBack(res);
        });
    }
};

module.exports = burger
