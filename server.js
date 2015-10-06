var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile('public/index.html', {root: __dirname + '/'});
});

var port = process.env.PORT || 3000;

var server = app.listen(port, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server running on: http://localhost:%s',port);
});


