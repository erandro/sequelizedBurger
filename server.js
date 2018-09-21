var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 5000;

var db = require("./models");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT || port, function () {
        console.log("App listening on PORT " + PORT);
    });
});

// { force: true }