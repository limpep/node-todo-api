var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//model scheme added validation
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

//user model scheme
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  password: {
    type: String
  }
});


var newUser = new User({
  email: 'hello@hello.com',
  password: "abc123"
});

newUser.save().then((doc)=>{
  console.log('Saved user', doc);
},(e) => {
  console.log('unable to save user',e);
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// },(e) => {
//   console.log('unable to save todo');
// });

// var otherTodo = new Todo({
//   text: '  Edit this video  '
// });
//
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e) => {
//   console.log('unable to save todo');
// });
