const { apiHandler, homeHandler, publicHandler } = require('./handler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    homeHandler(req, res, endpoint);
  } else if (endpoint === '/search') {
    apiHandler(req, res);
  } else if (endpoint.includes('/')) {
    publicHandler(req, res, endpoint);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1> Not found </h1>');
  }
};

module.exports = router;
