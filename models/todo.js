var mongoose = require("mongoose");


//SCHEMA
var todoSchema = new mongoose.Schema({ //Schema is an object with key : value pairs
    name : {
        type : String,
        required : "Name cannot be blank"
    },
    // the following two properties will have DEFAULTS so that the user does not have to set them
    completed : {
        type : Boolean,
        default: false
    },
    
    created_date : {
        type : Date,
        default : Date.now
    }
});

//TODO MODEL

var Todo = mongoose.model('Todo', todoSchema); // takes model name and schema as parameters

//MAKE IT AVAILABLE TO OTHER FILES

module.exports = Todo;



//TODO elements:
//name = string
//completed = boolean
//date = Date