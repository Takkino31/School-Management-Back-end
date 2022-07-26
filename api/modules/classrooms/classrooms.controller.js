const ClassroomRepository = require('./classrooms.repository')
const classrooms = [
    {id: 1, className: 'Tle S2A1', desc: 'lorem ipsum1'},
    {id: 2, className: 'Tle S2A2', desc: 'lorem ipsum2'},
    {id: 3, className: 'Tle S2A3', desc: 'lorem ipsum3'},
    {id: 4, className: 'Tle S2A4', desc: 'lorem ipsum4'},
    {id: 5, className: 'Tle S2A5', desc: 'lorem ipsum5'},
    {id: 6, className: 'Tle S2A6', desc: 'lorem ipsum6'},
    {id: 7, className: 'Tle S2A7', desc: 'lorem ipsum7'},
    {id: 8, className: 'Tle S2A8', desc: 'lorem ipsum8'},
    {id: 9, className: 'Tle S2A9', desc: 'lorem ipsum9'}
  ]
module.exports.classrooms = classrooms


const Classroom = require('./classrooms.schema')

module.exports.findAllClassrooms = async (req,res) =>{
    const results = await Classroom.find()
    res.send(results)
}

module.exports.findOneClassroom = async (req,res) => {
    const id = req.params.id
    const classroom = await Classroom.findById(id)
    res.send(classroom)
}

module.exports.deleteClassroom = async (req,res) => {
    const id = req.params.id
    await Classroom.findByIdAndDelete({_id : id})
    res.send({status: true})
}

module.exports.addClassroom = async(req, res) => {
    const classroom = await Classroom.create(req.body)
    res.send(classroom)
}

module.exports.updateClassroom = async(req,res) =>{
    const id = req.params.id
    const classroom = await Classroom.findByIdAndUpdate({_id: id},req.body)
    res.send(classroom)
}
