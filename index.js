const express = require('express')
require('dotenv').config()
const Student = require('./student/student')

const {DB_USERNAME,DB_PASS,MODE_ENV,PORT} = process.env

const app = express()
app.use(express.json())

app.get('/students' , (req , res)=>{
    const students = Student.findAllStudents()
    res.send(students)
})

app.get('/student/:id' , (req , res)=>{
    const student = Student.findOneStudent(req.params.id)
    res.send(req.body)
})

app.post('/student',(req,res) =>{
    console.log(req.body)
    Student.addStudent(req.body)
    res.send(req.body)
})

app.put('/student/:id',(req,res) =>{
    console.log(req.body)
    Student.updateStudent(req.params.id,req.body)
    res.send(req.body)
})

console.log(PORT);

app.listen(PORT , ()=> {
    console.log('> Server is up and running on port : ' + PORT)
})


console.log(DB_USERNAME);