var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    
    //below code defines the first routes and callbacks(with request and response args) 
    
    app.get('/', function(req, res){
        res.send({name: "Barry", age : 27, status : "single"});
    });
    
    app.get('/happy', function(req, res){
        res.send(":)");
    });
    
    //below code starts the app on the port defined in process.env on Cloud9
    
    app.listen(port, function(){
        console.log("APP IS RUNNING ON PORT " + process.env.PORT);
    })