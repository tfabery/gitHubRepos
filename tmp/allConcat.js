var getRepos = require('./../js/github-lookup.js').getRepos;

var displayRepos = function(html) {
  $('#repos').html(html);
};

$(function() {
  $('.username').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    getRepos (username, displayRepos);
  });
});
