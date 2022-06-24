var http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Type', 'text/html');
  res.end(
    // '{ "message" : "Hello World " }'
    "Hello World"
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at   http://${hostname}:${port}/`);
});


const fs =require('fs');





// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello Node JS!');
// }).listen(8081);