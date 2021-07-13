require('dotenv').config()

const express = require('express')
const app = express()

 const mongoose = require('mongoose');

 mongoose.connect(process.env.DB_URL,{ useNewUrlParser:true,
                                     useUnifiedTopology: true,
                                    useCreateIndex : true})

 const db = mongoose.connection

 db.on('error',(e)=> console.error(e))
 db.once('open',()=> console.log("Mongoose connected succesfully"))

 app.use(express.json())

 const studentRouter = require('./routes/student.js')

 app.use('/',studentRouter)

 const port = process.env.port||3000

 app.listen(port,()=>{
     console.log("Server Started at "+port)
 });