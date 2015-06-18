var express = require('express');
var app = express();

/* use express to serve static resources from 'public/' */
app.use(express.static('public'));

app.get('/', function(req, res){
   console.log('GET HOME'); 
   res.send('Hello world');
});

app.get('/index.htm', function(req, res){
   console.log('GET for index.htm'); 
   //res.send('Got it~'); 
   res.sendFile(__dirname + "/" + "index.htm");
});

app.get('/process_get', function(req, res){
  //Prepare output in JSON format
  console.log('PROCESS GET');
  var response = {
    first_name:req.query.first_name,
    real_last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("OuExample app listening at http://%s:%s", host, port)
});
