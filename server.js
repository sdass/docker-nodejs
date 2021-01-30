const http = require('http');
const fs = require('fs');
const port = '2222';
var path = require('path');

const server = http.createServer((req, res) => {
  console.log(new Date() + ' request received on ' + req.url);
  if(req.url.endsWith('html') || req.url ==='/' || req.url ==='http://localhost:2222/' || req.url === 'http://localhost:2222' ){
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
    //res.end(); NO
  }else if(req.url.indexOf('underscore') > -1){
    console.log("here: " + req.url);
    //fs.readFile(__dirname + '/public/js/script.js', function (err, data) {
    fs.readFile(__dirname + req.url, function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();// NO
    });
  }else{
    console.log('favicon etc, ' + req.url);
    //res.end(); NO
  }
});

server.listen(process.env.PORT || port, ()=> { console.log(`access homepage by http://localhost:${port}`);});