//this is the root file for thr server to get started

const express = require('express')
const userRouter=require("./routes/user");
const adminRouter=require("./routes/admin")

const app=express()

app.use(adminRouter)
app.use(userRouter)


app.listen(3000)