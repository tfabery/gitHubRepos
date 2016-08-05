var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username, display) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    var list = '';
    response.forEach(function(repo) {
      createdDate = moment(repo['created_at'])['_d'];
      list = list + '<li><span class="repoName">' + repo['name'] + '</span>, created: ' +  createdDate +  '</li>'
    });
    display(list);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
