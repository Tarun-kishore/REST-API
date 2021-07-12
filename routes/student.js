const express = require('express')

const router = express.Router()

//Get one
router.get('/',(req,res)=>{
    res.send('Get one')
})

//Get all
router.get('/all',(req,res)=>{
    res.send('Get all')
})

//create
router.post('/',(req,res)=>{
    res.send('Create')
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