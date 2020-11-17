const http = require('http')
const url = require('url')

function start(route){
  function onRequest(req,res){
    let pathname = url.parse(req.url).pathname;
    console.log('req for '+pathname+' received');

    route(pathname)

    res.writeHead(200,{'Content-type':"text/plain"})
    res.write("Hello woorld")
    res.end()
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("service has started")
}

exports.start = start;