var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db){
     if(err) throw err;

     var students = { name:"srigowri", address:"bangalore"};
     db.collection("students").insertOne(students,function(err,result){
         if (err) throw err;
     console.log("1 Record Inserted");
     db.close();
    })
})