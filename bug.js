const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Uncommon bug:  The server might fail silently if the port is already in use.  No error message is thrown.
//This is uncommon because many developers expect an error to be thrown indicating the port is busy