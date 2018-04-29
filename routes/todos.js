//ROUTER IN ROUTES DIRECTORY
var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/', function(req, res){
    db.Todo.find().then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    });
});

router.post('/', function(req, res){
    //res.send("THIS IS THE POST ROUTE");
    //console.log(req.body); //we can do it with bodyParser -> req.body is a JSON object
    db.Todo.create(req.body) //creates a new object (based on JSON input) in the database, mongo should also create "date" and "completed" from defaults
    .then(function(newTodo){  //the previous function will return a new todo
        res.status(201).json(newTodo); // send status "201" - something was created and send back the JSON object
    })
    .catch(function(err){
        res.send(err);
    });
});

router.get('/:todoId', function(req, res){ // :todoId is the params of this route, we could have more params /:todoId/:name/:number
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){ //we take the todo returned by the previous function and show it in json format
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    });
});

module.exports = router;