const http = require('http');
const fs = require('fs/promises');

// create server object
http
  .createServer(async (req, res) => {
    const fileName = req.url === '/' ? `./index.html` : `.${req.url}.html`;
    let data;

    try {
      data = await fs.readFile(fileName);
      res.writeHead(200, { 'Content-Type': 'text/html' });
    } catch (err) {
      data = await fs.readFile('./404.html');
      res.writeHead(404, { 'Content-Type': 'text/html' });
    }
    res.write(data); // write response to client
    return res.end(); // end response
  })
  .listen(8080); // server object listens on port 8080
