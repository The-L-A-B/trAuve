// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var db = require("../models/");

module.exports = function(app) {
    // Get all items 
    app.get("/api/all", function(req, res) {
        db.Trauve.findAll({})
        .then(function(results) {
            res.json(results);
        });
    });  

    // Add a item
    app.post("/api/new", function(req, res) {
      console.log(req.body);
    
      Trauve.create ({
          type: req.body.type,
          price: req.body.price,
          name: req.body.name,
          size: req.body.size
      }).then(function(results) {
          res.end()
      })
      
    });
};
  