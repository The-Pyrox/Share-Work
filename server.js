const http = require('http');
const app = require('./app');

const port = process.env.PORT || 9000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello there, world!\n');
});

server.listen(port);
