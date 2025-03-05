const express = require('express');
const bodyParser = require("body-parser");

const assignment = express();

assignment.use (express.json());
assignment.use(bodyParser.urlencoded({extended:true}));

assignment.listen(5000 ,()=>{
    console.log("Server is running smootly...")  
});

assignment.post('/bio',(req,res)=>{
    const{fullName,fatherName,email,age,gender,designation}=req.body;
    res.send(`Hi, I am ${fullName}, a ${age}-year-old ${gender} working as a ${designation}.
         Son of ${fatherName}, I have a passion for creating user-friendly web experiences.
          You can reach me at ${email}.`  
)

})


