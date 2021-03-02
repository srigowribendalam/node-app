var express = require('express');
var app = express();

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false}));

app.get('/',function(req,res){
    res.sendfile('form.html');
});

app.post('/submit-student-data', function(req,res){
    var name = req.body.firstname + ' ' + req.body.lastname;
res.send(name + 'Submitted succesfully');
});

var server = app.listen(5000,function() {
    console.log('Node Server is Running...');
});
