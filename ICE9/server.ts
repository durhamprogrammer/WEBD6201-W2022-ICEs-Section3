import http from 'http';
import fs from 'fs';

const hostname: string = '127.0.0.1';
const port: number = 3000;

// create a server object (Immutable)
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => 
{
  let path =  __dirname + req.url;
  fs.readFile(path, function (err, data) {
    if (err) 
    {
      res.writeHead(404); // file not found
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

// creating an event listener
server.listen(port, hostname, function() 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
