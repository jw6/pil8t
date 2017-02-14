/* GET about page. */
module.exports.about = function(request, response) {
  response.render('generic-text', { title: 'About' });
};

