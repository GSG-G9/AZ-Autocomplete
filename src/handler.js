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

const publicHandler = (req, res, endpoint) => {
  const ext = endpoint.split('.')[1];
  const filesExtension = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/js',
    png: 'image/png',
    json: 'application/json',
  };
  const url = endpoint.split('/')[1];
  const filePath = path.join(__dirname, '..', './public', url);
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

const apiHandler = (req, res) => {
  const filePath = path.join(__dirname, 'words.json');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1> Error 500: Internal Server Error! </h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(file);
    }
  });
};

module.exports = { apiHandler, homeHandler, publicHandler };
