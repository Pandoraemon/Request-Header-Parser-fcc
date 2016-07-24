var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.send(req.get("x-forwarded-for")+"<h1>" + req.get('accept-language') + "</h1>");
});

var server = app.listen(app.get('port'), function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("listen on http://%s:%s", host, port);
});

