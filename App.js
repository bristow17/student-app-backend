const express = require("express")
const mongoose = require("mongoose")
const corus = require("cors")
const student=require("./models/Student.js")
const {studentmodel}=require("./models/Student.js")

const app=express()
app.use(corus())
app.use(express.json())

mongoose.connect("mongodb+srv://bristow17:bristow1904@cluster0.vn8j7z4.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")


app.get("/",(req,res)=>(
    res.send("hello")
))


// app.get("/contact",(req,res)=>(
//     res.send("welcome to my contactpage")
// ))



app.post("/add",(req,res)=>{

    let input = req.body
    // console.log(input)
    let student=new studentmodel(input)
    console.log(student)
    student.save()
    //res.send("Inserted")
    res.json({"status":"success"})
})


app.get("/viewall",(req,res)=>{

    studentmodel.find().then(
        
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
}

)



app.listen(8080,()=>(
    console.log("server started")
))