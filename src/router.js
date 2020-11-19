const { homeHandler, publicHandler } = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    homeHandler(req, res);
  } else if (endpoint.includes('public')) {
    publicHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1> Not found </h1>');
  }
};

module.exports = router;
