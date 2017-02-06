/* GET about page. */
module.exports.about = function(request, response) {
  response.render('index', {title: 'About'});
};
