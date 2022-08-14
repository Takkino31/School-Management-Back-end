const ctrl = require('../students/students.controller')
module.exports = class ClassroomRepository{
    id;
    className;
    desc;
    students;
    constructor(data){
        Object.assign(this,data)
        // this.students = students.find((student) => {
        //     student.className == this.idClass
        // })
    
        this.students = ctrl.students.filter( (student) => student.idClass == this.id)
        console.log(this.students);
    }
}