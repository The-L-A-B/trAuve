// *** Dependencies
var express = require("express");
//middleware
// const cors = require('cors');
// var compression = require('compression');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8081;
require('dotenv').config();
// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

// Static directory
app.use(express.static("public"));

//compress
// app.use(compression());

//Routes
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
                                                                                                                                                                                                        