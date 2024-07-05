//this is the root file for thr server to get started

const express = require('express')
const bodyParser=require('body-parser')
const userRouter=require("./routes/user");
const adminRouter=require("./routes/admin")
const path=require('path')

const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use("/admin",adminRouter)
app.use(userRouter)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","errorPage.html"));
})


app.listen(3000)