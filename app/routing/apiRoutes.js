// *** Include Modules: friends
var friendsData = require('../data/friends');

// Calculate totalDifference to determine best match
function calculateMatch(newFriend) {
  var totalDifference = [];
  // Iterate over each friend object
  for (var i = 0; i < friendsData.length; i++) {
    var absValue = 0;
    // Iterate over each survey question
    for (var j = 0; j < 9; j++) {
      // Calculate absolute value of each question for new friend and existing friends profiles; type coercion?
      absValue += Math.abs(newFriend.body.scores[j]-friendsData[i].scores[j]);
    }
    // Append into array
    totalDifference.push(absValue);
  }
  // Determine lowest total difference and return specific friend object
  return friendsData[(totalDifference.indexOf(Math.min.apply(Math, totalDifference)))];
}

// *** Export routes
module.exports = function(app) {
  // Retrieve friends data object in JSON format for /api/friends request    
  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  });

  // Create new entry in friends data object
  app.post('/api/friends', function(req, res) {
    var data = calculateMatch(req);    
    // Append new friend into friends data object array
    friendsData.push(req.body);
    // Respond to request with best match
    res.json(data);
  });
};
