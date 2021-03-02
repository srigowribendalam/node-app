var http =require('http');
var dt =require('./a')

http.createServer(function(req,res){
res.writeHead(200,{
    'Content-Type':'text/html'
});
res.write("the date & Time is:"+dt.myDateTime());
res.end();
}).listen(8980)