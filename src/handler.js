const fs = require('fs');
const path = require('path');

const homeHandler = (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1> Error 500: Internal Server Error! </h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
    }
  });
};

const filesExtension = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/js',
};

const publicHandler = (req, res) => {
  const endpoint = req.url;
  const ext = endpoint.split('.')[1];
  const url = endpoint.split('/');
  const filePath = path.join(__dirname, '..', ...url);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1> Error 500: Internal Server Error! </h1>');
    } else {
      res.writeHead(200, { 'Content-Type': filesExtension[ext] });
      res.end(file);
    }
  });
};

module.exports = { homeHandler, publicHandler };
