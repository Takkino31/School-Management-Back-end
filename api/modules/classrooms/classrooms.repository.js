const students = require('../students/students.controller').students
module.exports = class ClassroomRepository{
    id;
    className;
    desc;
    students;
    constructor(data){
        Object.assign(this,data)
        this.students = students.find((student) => {
            student.className == this.idClass
        })
    }
}