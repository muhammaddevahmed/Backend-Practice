const express = require('express')
const app = express()
app.use(express.json())
const {myRouter} = require('./Routes/router')
const {dbConnection} = require('./Config/db') 


dbConnection() ;

app.use('/', myRouter)

app.listen(5001, () => console.log('server is running on 5001'))