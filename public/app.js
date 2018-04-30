/* global $*/

$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)
    .catch(function(err){
        console.log(err);
        //handle error
    });
    
//EVENT LISTENERS    
    
    $("#todoInput").keypress(function(event){
        if(event.which == 13){          //this checks if the key pressed was ENTER -> 13 is the key code for Enter :)
            createTodo();
        }
    });
    
    $(".list").on("click", ".delete", function(e){  //we need to add the click listener to sth that exists at the beginning when page loads
        e.stopPropagation();    //clicking on "delete" should not also mean clicking on the entire "li"
        removeTodo($(this).parent());
    });
    
    $(".list").on("click", "li", function(){
       updateTodo($(this));
    });
    
    
function addTodos(todos){
    //add todos to the page
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function addTodo(todo){
       var newTodo = $('<li class="task">' + todo.name + ' <span class="delete">X</span></li>');
       newTodo.data("id", todo._id);   //instead of storing it in html data attributes, we can store it with jQuery
       newTodo.data("completed", todo.completed);
       //newTodo.addClass("task");
       if (todo.completed){
           newTodo.addClass("done");
       }
       $(".list").append(newTodo);
    }

function createTodo(){
    //send POST request to create /api/todos route to create a todo
    var userInput = $("#todoInput").val();
    $.post('api/todos', { name : userInput })
    .then(function(todo){
        $("#todoInput").val('');
        addTodo(todo);
    })
    .catch(function(err){
        console.log(err);
    });
}

function removeTodo(todo){
    var clickedId = todo.data("id");
        var deleteUrl = "api/todos/" + clickedId;
        todo.remove();
        $.ajax({
            method : "DELETE",
            url : deleteUrl
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        });
}

function updateTodo(todo){
  
    var clickedId = todo.data("id");
    var updateUrl = "api/todos/" + clickedId;
    
    var isDone = !todo.data("completed");
    var updateData = { completed: isDone };
     
    $.ajax({
               method: "PUT",
               url : updateUrl,
               data : updateData
           })
           .then(function(updatedTodo){
               console.log(!isDone);
               todo.toggleClass("done");
               todo.data("completed", isDone);
           })
           .catch(function(err){
               console.log(err);
           });
    
}
});