var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
  request('http://opentable.herokuapp.com/api/cities', function (error, response, body) {
    var cities = JSON.parse(response.body);
    console.log("Number of cities: " + cities.count);

    res.send(response.body);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
