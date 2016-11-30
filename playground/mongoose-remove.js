const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove everything in the db
// Todo.remove({}).then((result) => {
//   console.log(result);
// })

//remove first doc
// Todo.findOneAndRemove

//Find by id and remove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '583ee7e2b56962466f14228d'}).then((todo) => {
//
// });
//
Todo.findByIdAndRemove('583ee7e2b56962466f14228d').then((todo) => {
  console.log(todo);
});
