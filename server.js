// *** Include Modules: express, path
var express = require('express');

// *** Express configuration
// Create Express application
var app = express();
// Heroku port or 8080
var PORT = process.env.PORT || 8080;
// Body parsing for URL encoded and JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// *** Call routes: HTML, API
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);


// *** Listener
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});