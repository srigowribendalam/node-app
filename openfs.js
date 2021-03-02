var fs=require('fs');
console.log("going to open");

fs.open('test.txt.txt','r+', function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("file opened")
})