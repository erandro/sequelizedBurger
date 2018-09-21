var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (data) {
            var burgerObject = {
                burgers: data
            };
            res.render("index", burgerObject);
        }).catch(function (err) {
            console.log(err);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            console.log(err);
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        }, { where: { id: req.params.id } })
            .then(function (data) {
                res.json(data);
            }).catch(function (err) {
                console.log(err);
            });
    });
};
