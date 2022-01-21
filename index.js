// var express = require("express")
// var bodypar = require("body-parser")
// var mongoose = require("mongoose")
// const app = express()

// app.use(bodypar.json())
// app.use(express.static('public'))
// app.use(bodypar.urlencoded({
//     extended:true
// }))

// mongoose.connect('mongodb://Localhost:27017/mydb',{
//     useNewUrlParser: true,
//     newUnifiedTopology: true
// });

// var db = mongoose.connection;

// db.on('error',()=>console.log("Error in connecting"));
// db.once('open',()=>console.log("Connected to database"));

// app.post("/contact",(req,res)=>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var msg = req.body.msg;

//     var data={
//         "name":name,
//         "email":email,
//         "msg":msg
//     }

//     db.collection('users').insertOne(data,(err,collection)=>{
//         if(err){
//             throw err;        
//         }
//         console.log("Record Inserted");
//     })

//     return res.redirect('contact.html')
// })
// app.get("/",(req,res)=>{
//     res.set({
//         "allow access to origin":'*'
//     })
//     return res.redirect('contact.html')
// }).listen(3000)

// console.log("listening on port 3000");
// const express = require("express");
// const path=require("path");
// const app=express();
// const port=5500;
// const bodyparser=require("body-parser")
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/contactPortfolio', { useNewUrlParser: true, useUnifiedTopology: true });

// const contactSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     msg: String
//   });

// const Contact = mongoose.model('Contact', contactSchema);

// app.use('/static',express.static('static'));
// app.use(express.urlencoded())

// // Set the template engine as pug
// app.set('view engine','html')

// // Set the views directory 
// // app.set('views',path.join(__dirname,'views'));

// app.get('/',(req,res)=>{
//     const params={}
//     res.status(200).render('home.html',params)
// });

// app.get('/contact',(req,res)=>{
//     const params={}
//     res.status(200).render('contact.html',params)
// });

// app.post('/contact',(req,res)=>{
//     var myData = new Contact(req.body);
//     myData.save().then(()=>{
//         res.send("This item has been saved to the database")
//     }).catch(()=>{
//         res.status(400).send("Item was not send to the database")
//     });

//     // res.status(200).render('contact.pug')
// });

// app.listen(port,()=>{
//     console.log("this application started");
// });