var express = require('express');
var app = express();

app.get('/', function(req,res){
    console.log('Get request')
    res.send('Welcome to Banglore')
})

app.get('/del_student', function(req,res){
  console.log('Get request to delete page')
  res.send('I am deleted')
})

app.get('/enrolled_student', function(req,res){
  console.log('Get request from enrolled student')
  res.send('I am enrolled student')
})
var server = app.listen(9000,function(req,res){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listen at http://%s:%s", host,port)
})