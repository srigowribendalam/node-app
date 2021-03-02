const mongo = require('mongodb')
const url = "mongodb://localhost:27017";

mongo.connect(url, {useNewUrlParser:true}, (err,db)=>{
    if(err){
        console.log(err);
        process.exit(0);
    }
    let data=[{
        "id":102,
        "name":"srigowri"
    },
    {
        "id":103,
        "name":"sushi"
    },
    {
        "id":104,
        "name":"chinni"
    },
    {
        "id":105,
        "name":"mithila"
    }];
    var dbo = db.db('testdb')
    console.log('db created & connected');
    var collection =dbo.collection('users');
    collection.insertMany(data, (err,result)=>{
        if(err){
        console.log(err);
        process.exit(0);
    }
    console.log(result);
    db.close();
    })
})