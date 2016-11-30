var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;
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

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});



//listening on port 3000
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
