//THIS IS THE INDEX.JS FILE IN MODELS DIRECTORY
var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api'); //connect mongoose to a database
mongoose.Promise = Promise; // to allow us to use the Promise syntax so that we can: db.Todo.find().then().catch


module.exports.Todo = require("./todo"); //WE REQUIRE THE TODO.JS FILE WHERE WE STORE THE DB SCHEMA