const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('583d8f391cd2d30566a21f62')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// })

//ObjectId("583d79f729da6b2fbce2e055")
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('583d79f729da6b2fbce2e055')
}, {
  $set: {
    name: 'Ergun Polat'
  },
  $inc: {
    age:1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})

  //db.close();
});
