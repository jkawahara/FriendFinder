// *** Include Modules: friends
var friendsData = require('../data/friends');

// *** Export routes
module.exports = function(app) {
  // Retrieve friends data object in JSON format for /api/friends request    
  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  });

  // Create new entry in friends data object
  app.post('/api/friends', function(req, res) {
    if (friendsData) {
      res.json(friendsData);
    } else {
      res.json(false);
    }
  });
};
