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
module.exports.classrooms = this.classrooms

module.exports.findAllClassrooms = (req,res) =>{
    console.log("test");
    res.json(classrooms)
}

module.exports.findOneClassroom = (req,res) => {
    const id = req.params.id
    const classroom = classrooms.find((c)=>c.id==id)
    res.json(classroom)
}

module.exports.addClassroom = (req, res) => {
    classrooms.push(req.body)
    res.json(req.body)
}

module.exports.updateClassroom = (req,res) =>{
    const id = req.params.id
    const classroom = classromms.find((s)=>s.id ==id)
    res.json(classroom)
}

module.exports.deleteClassroom = (req,res) => {
    const index = classrooms.findIndex((classroom)=>classroom.id == req.params.id)
    classrooms.splice(index,1)
    res.json({status: true})
}