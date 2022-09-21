
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

const Student = require('./students.schema')

module.exports.findAllStudents = async (req,res)=> {
    // const results = students.map((student)=> new StudentRepository(student))
    // console.log({results});
    // res.send(results)
    const results = await Student.find()
    res.send(results)
}


module.exports.findOneStudent = async(req,res) => {
    const id = req.params.id
    const student = await Student.findById({_id: id})
    // res.send(new StudentRepository(student)) 
    res.send(student) 
}

module.exports.addStudent = async (req, res) => {
    const student = await Student.create(req.body)
    res.send(student)
}

module.exports.updateStudent = async (req,res) =>{
    const id = req.params.id
    const student = await Student.findByIdAndUpdate({_id: id},req.body)
    res.send(student)
}

module.exports.deleteStudent = async(req,res) => {
    const id = req.params.id
    await Student.findByIdAndDelete({_id : id})
    res.send({status: true})
}