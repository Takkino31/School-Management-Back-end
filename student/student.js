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

module.exports.findAllStudents = () =>{
    return students;
}

module.exports.findOneStudent = (id) => {
    return students.find((student) => {
        student.id = id
    })
}

module.exports.addStudent = (student) => {
    return students.push(student)
}

module.exports.updateStudent = (id,student) =>{
    const index = students.findIndex((element) => { element.id == id})
    students.splice(index,1,student)
    return students[index]
}