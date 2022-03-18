import http from 'http';

const hostname: string = '127.0.0.1';
const port: number = 3000;

// create a server object (Immutable)
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => 
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// creating an event listener
server.listen(port, hostname, function() 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
