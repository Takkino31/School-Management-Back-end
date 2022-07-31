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

module.exports.findAllStudents = (req,res) =>{

    res.json(students)
}

module.exports.findOneStudent = (req,res) => {
    const id = req.params.id
    const student = students.find((s)=>s.id==id)
    res.json(student)
}

module.exports.addStudent = (req, res) => {
    students.push(req.body)
    res.json(req.body)
}

module.exports.updateStudent = (req,res) =>{
    const id = req.params.id
    const student = students.find((s)=>s.id ==id)
    res.json(student)
}

module.exports.deleteStudent = (req,res) => {
    res.json({status: true})
}