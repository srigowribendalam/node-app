var fs=require('fs');

fs.readFile('test.txt.txt','utf8', function(err,data){
    debugger;
    if(err)throw err;
    console.log(data)
})