const express = require("express")
const mongoose = require("mongoose")
const corus = require("cors")

const app=express()
app.use(corus())

app.get("/",(req,res)=>(
    res.send("hello")
))


app.get("/contact",(req,res)=>(
    res.send("welcome to my contactpage")
))


app.listen(8080,()=>(
    console.log("server started")
))