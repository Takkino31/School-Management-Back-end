const express = require('express')
require('dotenv').config()
const Files = require('./api/utils/files')

const {DB_USERNAME,DB_PASS,MODE_ENV,PORT} = process.env

const app = express()
// app.use(express.urlencoded({extended: false}))
app.use(express.json())

require('./api/modules/auth/auth.guard')(app)
 
var routes = Files.walk(__dirname + '/api/modules');
  for (var i = 0; i < routes.length; i++){
    if (routes[i].indexOf('routes') !== -1){

        require(routes[i])(app);
        console.log(routes[i]);
    }
  }



app.listen(PORT , ()=> {
    console.log('> Server is up and running on port : ' + PORT)
})
