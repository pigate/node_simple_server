var express = require('express');
var app = express();

//Response with 'hello world'
app.get('/', function(req, res){
  console.log("GET request for homepage");
  res.send('Hello GET');
})

//POST request for homepage
app.post('/', function(req, res){
  console.log("POST request for /");
  res.send('Hello POST');
})

//DELETE request for /del_user page.
app.delete('/del_user', function(req, res){
  console.log("DELETE request for /del_user");
  res.send('Hello DELETE');
})

//GET request for /list_user page
app.get('/list_user', function(req, res){
  console.log("GET request for /list_user");
  res.send('Page listing');
})

//GET request for ab*cd
app.get('/ab*cd', function(req, res){
  console.log("GET request for /ab*cd");
  res.send('Page Pattern Match');
})

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
})

process.on("SIGUSR1", function(){
  server.end();
  process.exit(0);
});
