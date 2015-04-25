require("babel/register");
var express = require('express');
var app = express();
var data = [
 [1, 3],
 [2, 5],
 [3, 2],
 [4, 16],
 [18, 5]
];

app.get('/svg', function (req, res) {
  var svg = ...
  res.send(svg);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
