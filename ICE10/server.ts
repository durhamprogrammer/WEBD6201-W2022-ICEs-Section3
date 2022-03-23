import express from 'express';
import fs from 'fs';
import mime from 'mime-types';
let lookup = mime.lookup; // alias for mime.lookup

const app = express(); // create the application

const port = process.env.PORT || 3000;

app.use('/', function(req, res)
{
  let path = req.url as string;

  console.log(path);

  if (path == "/" || path=="/home") 
  {
    path = "/index.html";
  }

  fs.readFile(__dirname + path, function (err, data) 
  {
    if (err) 
    {
      res.writeHead(404); // file not found
      res.end("ERROR: 404 - File not found!");
      return;
    }
    res.setHeader("X-Content-Type-Options", "nosniff"); // security guard-function
    let mimeType = lookup(path.substring(1)) as string;
    res.writeHead(200, { "Content-Type": mimeType });
    res.end(data);
  });
});

app.listen(port, function()
{
  console.log(`Server listening on port: ${port}`);
});

export default app;