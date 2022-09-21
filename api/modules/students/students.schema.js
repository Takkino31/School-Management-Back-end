const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    idClass: {type: String},
    nom: {type: String},
    niveau: {type: String},
    misser: {type: Boolean},
})

const model = mongoose.model('student',studentSchema)
module.exports = model