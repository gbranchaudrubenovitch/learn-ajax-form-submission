console.time("server-start");

const PORT = 3000;

var express = require("express");
var bodyParser = require('body-parser');
var multipartFormMiddleware = require('multer')();
var fs = require("fs");

var app = express();

app.get('/', function(req, res){
    var html = fs.readFileSync('post-from-js.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.post('/', multipartFormMiddleware.array(), function(req, res){
    console.log(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Thanks for the submission, ' + req.body.name);
});

app.listen(PORT);

console.log('Listening at http://localhost:' + PORT);
console.timeEnd("server-start");
