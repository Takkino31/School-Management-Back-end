const mongoose = require('mongoose')

const classroomSchema = new mongoose.Schema({
    className: {type: String},
    desc: {type: String},

})

const model = mongoose.model('classroom',classroomSchema)
module.exports = model