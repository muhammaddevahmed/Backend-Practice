const express = require('express');

const router = require("./router.js")
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(appRout);