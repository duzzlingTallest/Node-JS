const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://127.0.0.1:27017/',function(err,db){
    const user = db.db('KaushalDb')
    // user.collection('users').find({}).toArray(function(err,data){
    //     console.log(data)
    // })

    user.collection('users').insertOne({name:'a',email:'a@gmail.com',address:'surat'},function(){
        console.log('success...')
    })

})