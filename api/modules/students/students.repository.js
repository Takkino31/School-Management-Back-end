const ctrl = require('../classrooms/classrooms.controller')
module.exports = class StudentRepository{
    id;
    idClass;
    nom;
    niveau;
    misser;
    classroom;
    constructor(data){
        Object.assign(this,data)
        this.classroom = ctrl.classrooms.find( (c) => c.id == this.idClass) 
    }
}