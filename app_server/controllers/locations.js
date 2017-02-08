/* GET home page. */
module.exports.homelist = function(request, response) {
  response.render('locations-list', {title: 'Home'});
};

/* GET location info page. */
module.exports.locationInfo = function(request, response) {
  response.render('index', {title: 'Location Information'});
};

/* GET Add review page. */
module.exports.addReview = function(request, response) {
  response.render('index', {title: 'Add review'});
};
