const express = require('express')
const hbs = require('hbs')
const path = require('path')
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/KaushalDb')    
const products = require('./models/products');

         

const app = express() 
const PORT = 8000

app.set('view engine','hbs')  //  set the view engine which help to show the out put on the browser.
app.set('views', path.join(__dirname, 'Template/Views')) // this set path and track..

const usePartialPath = path.join(__dirname, 'Template/Partial')
hbs.registerPartials(usePartialPath)

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
   
    res.render('Home')
})
app.get('/products', async (req, res) => {
    const products2 = await products.find()
    
    res.render('products',{product : products2})
})

app.get("/addproduct", async (req, res) => {
    
    res.render('AddProduct')
})



app.post("/addproduct", async (req,res)=>{
    console.log(req.body)
    // const products3 = await new products(req.body)
    //     products3.save()
    //     res.redirect('Products')
})
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());




app.listen(PORT, ()=>{
    console.log("Server is Running on",PORT);
})