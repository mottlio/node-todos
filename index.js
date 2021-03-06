//ROOT DIRECTORY

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    
var todoRoutes = require('./routes/todos'); //CONTAINS THE EXPORTS OF THE TODOS.JS FILES FROM THE ROUTES DIRECTORY 
    
    //BODYPARSER
    
var bodyParser = require('body-parser'); //NPM PACKAGE WHICH ALLOWS FOR PARSING OF DATA IN OUR POST ROUTE
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
//WE TELL THE EXPRESS APP WHERE THE STATIC FILES ARE:    
    app.use(express.static(__dirname + '/views')); //dirname used in case we start the server from a different directory
    app.use(express.static(__dirname + '/public'));
    
//below code defines the first routes and callbacks(with request and response args) 
    
    app.get('/', function(req, res){
        res.sendFile("index.html");
        //res.send("HELLO FROM THE INDEX PAGE!");
    });
    
    app.use('/api/todos', todoRoutes);
    
    app.get('/happy', function(req, res){
        res.send(":)");
    });
    
    //below code starts the app on the port defined in process.env on Cloud9
    
    app.listen(port, function(){
        console.log("APP IS RUNNING ON PORT " + process.env.PORT);
    })