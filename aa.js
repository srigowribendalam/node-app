var http =require('http');
var url =require('url')

http.createServer(function(req,res){
res.writeHead(200,{
    'Content-Type':'text/html'
});
var q = url.parse(req.url,true).querry;
var txt = q.year+""+q.month;
res.end(txt);
}).listen(4444)