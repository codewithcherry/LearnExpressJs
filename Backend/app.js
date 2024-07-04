//this is the root file for thr server to get started

const express = require('express')

const app=express()

app.get("/",(req,res,next)=>{
    console.log("first middleware");
    res.send("<html><body><h1>Welcome to express app</body></html>")
})


app.listen(3000)