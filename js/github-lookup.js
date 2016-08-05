var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username, display) {
  var addApiKey;
  if (apiKey) {
    addApiKey = '?access_token=' + apiKey;
  }
  else {
    addApiKey = '';
  }
  $.get('https://api.github.com/users/' + username + '/repos' + addApiKey).then(function(response){
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
