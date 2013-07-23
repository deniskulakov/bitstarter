var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var content = fs.readFileSync("index.html");
    response.send(content.toString());
})

app.use("/css",express.static(__dirname +  '/css'));
app.use("/img",express.static(__dirname +  '/img'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
