

const express = require('express');
const{login}=require("../Controller/login")
const app = express();
const router = express.Router();
const appRout = ()=>{
    router.get('/user',login)
}

module.exports = appRout;

 