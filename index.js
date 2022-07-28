const express = require('express')
const app = express()
require('dotenv').config()
const {DB_USERNAME,DB_PASS,MODE_ENV,PORT} = process.env


app.get('/test' , (req , res)=>{

   res.send('hello from simple server :)')

})

console.log(PORT);

app.listen(PORT , ()=> {
    console.log('> Server is up and running on port : ' + PORT)
})

console.log(DB_USERNAME);