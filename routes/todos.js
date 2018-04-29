//ROUTER IN ROUTES DIRECTORY
var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/todos');

//SHOW ALL TODOS AND CREATE A TODO

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo);

//A SINGLE TODO: GET, UPDATE, DELETE

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);


module.exports = router;