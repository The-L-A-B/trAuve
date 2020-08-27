// *** Dependencies
const express = require('express');
//middleware
// const cors = require('cors');
// const compression = require('compression');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8001;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

// Static directory
app.use(express.static('public'));

//compress
// app.use(compression());

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('~~ ~~App listening on PORT ' + PORT + '~~ ~~');
  });
});
