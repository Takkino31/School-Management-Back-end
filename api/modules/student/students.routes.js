module.exports =  function (app) {
    let Ctrl = require('./students.controller.js')
    app.route('./students')
     .get(Ctrl.findAllStudents) 
     .post(Ctrl.addStudent) 

     app.route('./students/:id')
     .put(Ctrl.updateStudent) 
     .get(Ctrl.findOneStudent) 

}