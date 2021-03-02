var http =require('http');


http.createServer(function(req,res){

res.write("Connection extablish");
res.end();
}).listen(8980)