classrooms = require('../classrooms/classrooms.controller').classrooms
module.exports = class StudentRepository{
    id;
    idClass;
    nom;
    niveau;
    misser;
    classroom;
    constructor(data){
        Object.assign(this,data)
        this.classroom = classrooms.find((classroom) => {
            classroom.id == this.idClass
        })
    }
}