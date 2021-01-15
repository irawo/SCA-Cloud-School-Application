var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to SCA Cloud School Application , this is my first assessment');
}).listen(8080); 
