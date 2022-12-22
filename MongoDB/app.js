//    install = npm install M
//    install = npm i json
//   localhost:27017 ==> 127.0.0.1:27017

// var Mongodb = require('mongodb').Mongodb
var Mongodb = require('mongodb').MongoClient;

//  Mongodb.connect('mongodb:127.0.0.1:27017/KaushalDb',function(err,db) {
//      console.log("DB Created Successfully....!");
//  })

 Mongodb.connect('mongodb:127.0.0.1:27017/KaushalDb',function(err,db) {
    const user = db.db('KaushalDb')
    const mydata = [{Name:'sam','Email':'sam@gmail.com',Address:'surat'}]
    user.collection('users').insertMany(mydata,function(){
        console.log('inserted...');
    }) 
     console.log("DB Created Successfully....!");
 })

//   Create Collection

//  Mongodb.connect('mongodb:127.0.0.1:27017/KaushalDb', function (err,db) {
//      const users = db.db("KaushalDb")
//      users.createCollection('users',function (err,data) {
//          console.log("Collection Created Successfully...!!");
//      })
//  })

//  .insertOne

//  Mongodb.connect('mongodb:127.0.0.1:27017/KaushalDb', function (err,db) {
//      const users = db.db("KaushalDb")
//      var mydata = { Name:"Kaushal", Address:"Surat", Email:"kaushaldamani386@gmail.com"};
//      users.collection('users').insertOne(mydata,function (err,data) {
//          console.log("Data Inserted Successfully.....!!");
//      })
//  })




//  .findOne

//  Mongodb.connect('mongodb:127.0.0.1:27017/KaushalDb', function (err,db) {
//      const users = db.db("KaushalDb")

//      users.collection('users').findOne({},function (err,data) {
//          console.log(data);
//      })
//  })

// Select all

//  Mongodb.connect('mongodb:127.0.0.1:27017/KaushalDb',function(err,db){
//    const user = db.db('KaushalDb')

//    user.collection('users').find({}).toArray(function(err,data){
//      console.log(data)

//    })
//  })

//   .find({},{projection:{address:0}}).toArray

//  Mongodb.connect('mongodb:127.0.0.1:27017/KaushalDb',function(err,db){
//    const user = db.db('KaushalDb')

//    user.collection('users').find({},{projection:{address:0}}).toArray(function(err,data){
//      console.log(data)

//    })
//  })

//   Find One
//   Mongodb.connect("mongodb:127.0.0.1:27017/", function (err, db) {
//       const user = db.db('KaushalDb')
//       user.collection('users').find({name:'Kaushal'}).toArray(function(err,data){
//           console.log(data)
//       })
//   })

//   Find One
//   Mongodb.connect("mongodb:127.0.0.1:27017/", function (err, db) {
//       const user = db.db('KaushalDb')
//       user.collection('users').find({name:'jay'}).toArray(function(err,data){
//           console.log(data)
//       })
//   })

//   Delete One
//   Mongodb.connect("mongodb:127.0.0.1:27017/", function (err, db) {
//       const user = db.db('KaushalDb')
//       user.collection('users').deleteOne({ name: 'Kaushal' }, function (err, data) {
//           console.log("sucessfuly deleted....")
//       })
//   })

//  Update
//  Mongodb.connect("mongodb:127.0.0.1:27017/", function (err, db) {
//      const user = db.db('KaushalDb')

//      const searchname = {name:'kushal'}
//      const newname = {$set:  {name: "Kaushal1-"} }

//      user.collection('users').updateOne(searchname, newname, function (err, data) {
//          console.log("sucessfuly updated....")
//      })
//  })

//  Mongodb.connect('mongodb:127.0.0.1:27017', function (err, db) {
//      const user = db.db('KaushalDb')
//      var products = [{ name: "lg" }, { name: "Apple" }]
//      user.collection('products').insertMany(products, function (err, data) {
//          console.log('Data inserted successfully ...')

//      })
//  })

//  Mongodb.connect('mongodb:127.0.0.1:27017',function(err,db){
//    const user = db.db('KaushalDb')
//    var orders = [ { status: "pending",product_id:2 }, { status: "complet",product_id:1 }]
//    user.collection('orders').insertMany(orders,function(err,data){
//      console.log('Data inserted successfully ...')

//    })
//  })

//  Mongodb.connect('mongodb:127.0.0.1:27017', function (err, db) {
//      const user = db.db('KaushalDb')
//      user.collection('orders').aggregate([
//          {
//              $lookup: {
//                  from: 'products',
//                  localField: 'id',
//                  foreignField: 'product_id',
//                  as: 'orderdetails'

//              }
//          }
//      ]).toArray(function (err, data) {
//          console.log(JSON.stringify(data))
//      })

//  })
