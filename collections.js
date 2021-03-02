var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, client){
    var db = client.db('db2');
     if(err) throw err;
     db.createCollection("students",function (err,res){
         if (err) throw err;
         console.log("collection is created");
         client.close();
     })
})