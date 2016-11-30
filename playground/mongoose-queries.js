const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '583ed32d993c971024b7e6e811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }


//returns all by id
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('583d9c4f677fa3131009b2dd').then((user) => {
  //not success
  if (!user) {
    return console.log('user not found');
  }
  //success
  console.log('User', user);
}).catch((e) => console.log(e));
