//ROUTES HELPER FUNCTION

var db = require('../models');


//GET ALL TODOS
exports.getTodos =  function(req, res){
    db.Todo.find().then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    });
};

//CREATE
exports.createTodo = function(req, res){
    //res.send("THIS IS THE POST ROUTE");
    //console.log(req.body); //we can do it with bodyParser -> req.body is a JSON object
    db.Todo.create(req.body) //creates a new object (based on JSON input) in the database, mongo should also create "date" and "completed" from defaults
    .then(function(newTodo){  //the previous function will return a new todo
        res.status(201).json(newTodo); // send status "201" - something was created and send back the JSON object
    })
    .catch(function(err){
        res.send(err);
    });
};

//GET ONE TODO
exports.getTodo = function(req, res){ // :todoId is the params of this route, we could have more params /:todoId/:name/:number
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){ //we take the todo returned by the previous function and show it in json format
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

//UPDATE
exports.updateTodo = function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new : true}) //this is a Mongoose method for updating entries in the database -ARGS: how to find and what to update with
    .then(function(todo){
        res.json(todo); //it responds with the old version by default unless we put {new : true} in the method option
    })
    .catch(function(err){
        res.send(err);
    });
    //res.send("THIS IS THE UPDATE ROUTE")
};

//DELETE
exports.deleteTodo = function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message : "THIS TODO HAS BEEN REMOVED"});
    })
    .catch(function(err){
        res.send(err);
    });
    //res.send("LET'S DELETE SOMETHING");
};

module.exports = exports;