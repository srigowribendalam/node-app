var http =require('http');


var server = http.createServer(function(req,res){
   if(req.url=='/'){
       res.writeHead(200,{'content-Type':'text/html'});
       res.write('<html><body><p> This is Home Page.</p></body></html>')
       res.end();
   }
   else if(req.url=='/student'){
       res.writeHead(200,{'content-Type': 'text/html'});
       res.write('<html><body><p> This is Student Page.</p></body></html>');
       res.end();
   }
   else if(req.url=='/admin'){
    res.writeHead(200,{'content-Type': 'text/html'});
    res.write('<html><body><p> This is admin Page.</p></body></html>');
    res.end();
   }
   else
   res.end('Invalid Request');
});
server.listen('1234');
console.log('Node.js web server at port 1234 is running..')