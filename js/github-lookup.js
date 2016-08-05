var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username, display) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    response.forEach(function(repo) {
      createdDate = moment(repo['created_at'])['_d'];
      display(repo['name'], createdDate);
    })
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
