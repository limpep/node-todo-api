var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//to start mongodb
//C:\Program Files\MongoDB\Server\3.2\bin>
//mongod.exe --dbpath \Users\Admin\mongo-data

//middlewear
app.use(bodyParser.json());

//seting route
//create new todo
app.post('/todos',(req,res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});


app.get('/todos', (req,res) => {
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e) => {
      res.status(400).send(e);
  });
});
//listening on port 3000
app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
