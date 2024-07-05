//this is the root file for thr server to get started

const express = require('express')
const bodyParser=require('body-parser')
const userRouter=require("./routes/user");
const adminRouter=require("./routes/admin")

const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRouter)
app.use(userRouter)

app.use("/err",(req,res,next)=>{
    res.status(404).send("<h1>Something went wrong 404 error</h1>");
})


app.listen(3000)