(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = 'a502c8ec77239600fbae5b7e16d470082fcfcb8e';

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
var getRepos = require('./../js/github-lookup.js').getRepos;

var displayRepos = function(html) {
  $('#repos').html(html);
}

$(function() {
  $('.username').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    getRepos (username, displayRepos);
  })
});

},{"./../js/github-lookup.js":2}]},{},[3]);
