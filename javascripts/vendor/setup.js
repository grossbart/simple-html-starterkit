// SETUP START ///////////////////////////////////////////////////////////
// Parse the URL query string and store its values in a model
var query = URI.parseQuery(window.location.search);
var model = new SimpleModel(query);
// Store the model's values in the URL when the user navigates to a new page
$('[data-stateful-link]').on('click', function(evt) {
  var uri = new URI(evt.currentTarget.href);
  uri.search(URI.buildQuery(model._fields));
  evt.currentTarget.href = uri.href();
});
// SETUP END /////////////////////////////////////////////////////////////
