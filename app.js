const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

app.get('*', (req, res) => {
  const fileName = req.url === '/' ? './index.html' : `.${req.url}.html`;

  try {
    // if page exists, send to client; else, send 404 page
    fs.existsSync(fileName)
      ? res.sendFile(path.join(__dirname, fileName))
      : send404(res);
  } catch (err) {
    send404(res);
    console.log(err);
  }
});

// send 404 page to res
function send404(res) {
  res.status(404).sendFile(path.join(__dirname, './404.html'));
}

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
