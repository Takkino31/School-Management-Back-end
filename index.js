const express = require('express')
require('dotenv').config()
const Files = require('./api/utils/files')
const mongoose = require('mongoose')

const {DB_USERNAME,DB_PASS,DB_URL,MODE_ENV,PORT} = process.env

const app = express()
// app.use(express.urlencoded({extended: false}))
app.use(express.json())

console.log('Connecting to db...')
mongoose.connect(process.env.DB_URL)
.then((result)=>{
  console.log('App is connected to School Management DB')
  initApp()
})
.catch((error)=>{
  console.log('Error when connecting db...'+ error)
})


function initApp() {
   //AUTOLOAD ROUTES
  var routes = Files.walk(__dirname + '/api/modules');


  //IMPORT PUBLIC ROUTEs
  for (var i = 0; i < routes.length; i++)
    if (routes[i].indexOf('.public.routes') !== -1)
        require(routes[i])(app);
        // console.log(routes[i])

  //USE GUARD FOR PRIVATES ROUTES
  require('./api/modules/auth/auth.guard')(app)

  for (var i = 0; i < routes.length; i++)
    if (routes[i].indexOf('routes') !== -1)
      require(routes[i])(app);
        // console.log(routes[i]);



  app.listen(PORT , ()=> {
      console.log('> Server is up and running on port : ' + PORT)
  })

}