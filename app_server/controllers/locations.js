/* GET home page. */
module.exports.homelist = function(request, response) {
  response.render('locations-list', { title: 'Home' });
};

/* GET location info page. */
module.exports.locationInfo = function(request, response) {
  response.render('location-info', { title: 'Location Info' });
};

/* GET Add review page. */
module.exports.addReview = function(request, response) {
  response.render('index', { title: 'Add review' });
};

/* GET location-review-form */
module.exports.addReview = function(request, response) {
  response.render('location-review-form', { title: 'Add review'});
}


