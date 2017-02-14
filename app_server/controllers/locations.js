/* GET home page. */
module.exports.homelist = function(request, response) {
  response.render('locations-list', {
    title: 'Pil8t - Help you get the newest weather data',
    pageHeader: {
      title: 'Pil8t',
      strapline: 'Get you to the place!'
    }
  });
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


