module.exports =  function (app) {
    let Ctrl = require('./classrooms.controller.js')
    app.route('/classrooms')
     .get(Ctrl.findAllClassrooms) 
     .post(Ctrl.addClassroom) 

     app.route('/classrooms/:id')
     .put(Ctrl.updateClassroom) 
     .get(Ctrl.findOneClassroom) 
     .delete(Ctrl.deleteClassroom) 

}