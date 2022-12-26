//    install = npm install M
//    install = npm i json
//   localhost:27017 ==> 127.0.0.1:27017

const MongoClient = require('mongodb').MongoClient


// Created Db

// MongoClient.connect("mongodb://127.0.0.1:27017/KaushalDb", function (err,client) {
//     console.log("Database Created Successfully...!");
// })

// Created Collection

// MongoClient.connect("mongodb://127.0.0.1:27017/", function (err,client) {
//     const user = client.db("KaushalDb")
//     user.createCollection('users',function (err,data) {
//         console.log("Collection Created Successfully...!!")
//     })
// })

// Insert Single Recored....

// MongoClient.connect("mongodb://127.0.0.1:27017/", function (err,client) {
//     const user = client.db("KaushalDb")
//     const mydata = {'name':'Kaushal','email':'Kaushal@gmail.com','address':'Surat'}
//     user.collection('users').insertOne(mydata,function (err,data) {
//         console.log("Inserted Successfully...!!")
//     })
// })

// Insert Many.....

// MongoClient.connect('mongodb://127.0.0.1:27017/', function (err, client) {
//   const user = client.db('KaushalDb');
//   const mydata = [
//     { name: 'sam', email: 'sam@gmail.com', address: 'pune' },
//     { name: 'jay', email: 'jay@gmail.com', address: 'baroda' },
//   ];
//   user.collection('users').insertMany(mydata, function (err, data) {
//     console.log('Inserted Successfully...!!');
//   });
// });

//Select All...

// MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
//     const user = client.db('KaushalDb')
//     user.collection('users').find({}).toArray(function(err,data){
//         console.log(data)
//     })
// })


//  Find One.....

//  MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
//      const user = client.db('KaushalDb')
//      user.collection('users').find({name:'jay'}).toArray(function(err,data){
//          console.log(data)
//      }) 
//  })

// Delete One
 
// MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
//      const user = client.db('KaushalDb')
//      user.collection('users').deleteOne({ name: 'jay' }, function (err, data) {
//          console.log("sucessfuly deleted....")
//      })
//  })

// Update...

// MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
//     const user = client.db('KaushalDb')

//     const searchname = {name:'Kaushal'}
//     const newname = {$set:  {name: "Kaushal Damani"} }

//     user.collection('users').updateOne(searchname, newname, function (err, data) {
//         console.log("sucessfuly updated....")
//     })
// })


// Product / Lg,Nokia...

// MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) {
//     const user = client.db('KaushalDb')
//     var products = [{ name: "lg" }, { name: "nokia" }]
//     user.collection('products').insertMany(products, function (err, data) {
//         console.log('Data inserted successfully ...')

//     })
// })

// order pandding.... 

// MongoClient.connect('mongodb://127.0.0.1:27017',function(err,client){
//   const user =client.db('KaushalDb')
//   var orders = [ { status: "pending",product_id:2 }, { status: "complet",product_id:1 }]
//   user.collection('orders').insertMany(orders,function(err,data){
//     console.log('Data inserted successfully ...')

//   })  
// })

// Marge Table....

MongoClient.connect('mongodb://127.0.0.1:27017', function (err, db) {
    const user = db.db('KaushalDb')
    user.collection('orders').aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'id',
                foreignField: 'product_id',
                as: 'orderdetails'


            }
        }
    ]).toArray(function (err, data) {
        console.log(JSON.stringify(data))
    })


})