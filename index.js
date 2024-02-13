const http = require('http');
// const url = require('url');
const fs = require('fs/promises');

// create a server object
http
  .createServer(async (req, res) => {
    console.log(`url: ${req.url}`);
    // const q = url.parse(req.url, true);
    // console.log(`q: ${q.pathname}`);
    const fileName = req.url === '/' ? `./index.html` : `.${req.url}.html`;
    console.log(`file name: ${fileName}`);

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
  .listen(8080); // the server object listens on port 8080

// fs.readFile(fileName, async (err, data) => {
//   if (err) {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.write('404');
//     return res.end();
//   }
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write(data); // write a response to the client
//   return res.end(); // end the response
// });
