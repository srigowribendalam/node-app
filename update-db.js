const mongo = require('mongodb')
const url = "mongodb://localhost:27017";

mongo.connect(url, {useNewUrlParser:true}, (err,db)=>{
    if(err){
        console.log(err);
        process.exit(0);
    }
    console.log('DB Created');
    var dbo=db . db('testdb');
    var collection = dbo.collection('users');
    collection.updateOne({name:'sushi'},{'$set':{'name':'gowri'}}, (err,result)=>{
    if(err){
        console.log(err);
        process.exit(0);
    }
    console.log(result);
    db.close();

})
})
