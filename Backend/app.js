//this is the root file for thr server to get started

const express = require('express');
const bodyParser=require('body-parser');
const userRouter=require("./routes/user");
const adminData=require("./routes/admin");
const path=require('path');

const app=express()

app.set('view engine','pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"public")));

app.use("/admin",adminData.route);
app.use(userRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","errorPage.html"));
})


app.listen(3000);