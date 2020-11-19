const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1> Hello </h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1> Not found </h1>');
  }
};

module.exports = router;
