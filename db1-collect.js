const mongo = require('mongodb')
const url = "mongodb://localhost:27017";

mongo.connect(url, {useNewUrlParser:true}, (err,db)=>{
    if(err){
        console.log(err);
        process.exit(0);
    }
    console.log('DB Created');
    var dbo=db . db('testdb');
    dbo.createCollection('users', (err,result)=>{
        if(err){
        console.log(err);
        process.exit(0);
        }
        console.log('Collection created');
        db.close();

    });
})