var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  var result = {
    "IPaddress": req.get("x-forwarded-for"),
    "Language": req.get("accept-language").split(",")[0],
    "OS": (/\(([^\(])+\)/g).exec(req.get("user-agent"))[0]//.split(";")[1]
  };
  res.send(JSON.stringify(result));
});

var server = app.listen(app.get('port'), function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("listen on http://%s:%s", host, port);
});

