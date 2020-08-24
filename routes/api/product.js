// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const router = require("express").Router();
var db = require("../../models");


    // Get all items 
    router.get("/products", function(req, res) {
        db.Product.findAll({})
        .then(function(results) {
            res.json(results);
        });
    });  

    // Add a product
    router.post("/products", function(req, res) {
      console.log(req.body);
    
      Product.create ({
          type: req.body.type,
          price: req.body.price,
          name: req.body.name,
          description: req.body.description,
          size: req.body.size,
          quantity: req.body.quantity,
      }).then(function(res) {
          res.end()
      })
      
    });
  
module.exports = router;