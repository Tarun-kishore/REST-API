const express = require('express')

const router = express.Router()

const Student = require('../models/student')

//Get one
router.get('/', async (req,res)=>{
    try{
        const student = await Student.find()
        res.json(student)
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

//Get all
router.get('/all',(req,res)=>{
    res.send('Get all')
})

//create
router.post('/',async (req,res)=>{
    const student = new Student({
        name : req.body.name,
        branch : req.body.branch,
        rollNo : req.body.roll
    })

    try{
        const newStudent = await  student.save()
        res.status(201).json(newStudent)
    }
    catch(err){
        res.status(400).json({message : err.message})
    }

})

//update
router.patch('/:id',(req,res)=>{
    res.send(`Update ${id}`)
})

//delete
router.delete('/:id',(req,res)=>{
    res.send(`Delete ${id}`)
})

module.exports = router