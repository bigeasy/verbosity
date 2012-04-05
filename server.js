var http = require('http');
var parse = require('url').parse;
var fs = require('fs');

var mime = {
  js: "text/javascript",
  html: "text/html",
  css: "text/css"
};

http.createServer(function (req, res) {
  var url = parse(req.url);
  if (url.pathname === "/") {
    url.pathname = "/index.html";
  }
  fs.stat(__dirname + url.pathname, function (error, stat) {
    if (error) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found\n');
    } else {
      fs.readFile(__dirname + url.pathname, function (error, buffer) {
        var ext = /\.(\w*)$/.exec(url.pathname)[1];
        res.writeHead(200, {'Content-Type': mime[ext]});
        res.end(buffer);
      });
    }
  });
}).listen(8076);
