//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//find all
  // db.collection('Todos').find().toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  //find single
  // db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // })

//find by id
  // db.collection('Todos').find({
  //   _id: new ObjectID('583d7dd01cd2d30566a21f5d')
  // }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  //get the count
  // db.collection('Todos').find().count().then((count) =>{
  //   console.log(`Todos count: ${count}`);
  //
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // })


  db.collection('Users').find({name: 'Ergun Polat'}).toArray().then((docs) =>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log('Unable to fetch todos', err);
  })


  //db.close();
});
