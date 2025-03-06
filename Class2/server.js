const express = require('express');
// const parse = require('parse');
const router = require("./Class3/router.js")
const bodyParser = require("body-parser");


const app = express();
// app.use(parse());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(appRout);




app.get('/',(req,res)=>{
    res.send("This is first API congrats!");
});

app.listen(5000,()=>{
    console.log('server is running....')
})

app.post('/user',(req,res)=>{
    const{email,password}=req.body;
    console.log(email);
    res.send(email);
});