// *** Include Modules: path
var path = require('path');

// *** Export routes
module.exports = function(app) {
  // Retrieve survey page for /survey request
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // Retrieve home page for all other request
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
