var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express'); 
var app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res){
  res.send('Hello');
});

app.post('/', function(req, res){
  console.log(req.body);
  var date = new Date();
  var s = '{"time":"' + date.toISOString() + '", "data": ' + JSON.stringify(req.body) + '}\n';
  var fname = 'log_'+date.getYear() + '_' + date.getMonth() + '_' + date.getDate(); 
  fs.appendFile(fname, s);
  var body = 'OK. hello';
  if (!res.headersSent)
    res.writeHead(200, {'Content-Length':body.length,'Content-Type':'text/plain'});
  res.end(body);
  //res.send('POST received');
});

var server = app.listen(80, function(){
  var host = server.address().address;
  var port = server.address().port;
});
