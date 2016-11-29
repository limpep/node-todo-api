const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });
//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });


// db.collection('Users').deleteMany({name: 'Ergun Polat'}).then((result) => {
//   console.log(result);
// });

//delete by id ObjectId("583d7bfd472e21150c43e068")
db.collection('Users').findOneAndDelete({
  _id: new ObjectID('583d7bfd472e21150c43e068')}
).then((result) => {
  console.log(result);
});


  //db.close();
});
