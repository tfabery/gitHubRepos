var getRepos = require('./../js/github-lookup.js').getRepos;

var displayRepos = function(name, createdAt) {
  $('#repos').append('<li><span class="repoName">' + name + '</span>, created: ' +  createdAt +  '</li>');
}

$(function() {
  $('.username').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    getRepos (username, displayRepos);
  })
});
