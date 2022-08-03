const classrooms = require('./classrooms.controller').classrooms
module.exports = class lassroomRepository{
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