
const StudentRepository = require('./students.repository');
const students = [
    {
        id: 1,
        idClass: 1,
        nom: 'Yaya Elimane',
        niveau: 'nullard',
        misser: false
    },
    {
        id: 2,
        idClass: 1,
        nom: 'Amy whinehouse',
        niveau: 'nullard',
        misser: false
    },
    {
        id: 3,
        idClass: 1,
        nom: 'Seynabou cisse',
        niveau: 'nullard',
        misser: false
    },
    {
        id: 4,
        idClass: 1,
        nom: 'Eliman Njaay',
        niveau: 'nullard',
        misser: false
    },
    {
        id: 5,
        idClass: 1,
        nom: 'Mouhamed Tine',
        niveau: 'nullard',
        misser: false
    },
    {
        id: 6,
        idClass: 1,
        nom: 'Coumba Barro',
        niveau: 'nullard',
        misser: false
    },
]

module.exports.students = students

// module.exports.findAllStudents = (req,res)=>{
//     res.json(students)
// }

module.exports.findAllStudents = function findAll(req,res) {
    const results = students.map((student)=>{ new StudentRepository(student)})
    console.log({results});
    res.send(results)
}


module.exports.findOneStudent = (req,res) => {
    const id = req.params.id
    const student = students.find((s)=>s.id==id)
    res.send(new StudentRepository(student)) 
}

module.exports.addStudent = (req, res) => {
    const student = req.body
    students.push(student)
    res.json(student)
}

module.exports.updateStudent = (req,res) =>{
    const id = req.params.id
    const student = students.find((s)=>s.id ==id)
    res.json(student)
}

module.exports.deleteStudent = (req,res) => {
    const id = req.params.id
    const index = students.findIndex((student)=>student.id == id)
    students.splice(index,1)
    res.send(true)
}