//this is the root file for thr server to get started

const express = require('express');
const bodyParser=require('body-parser');
const userRouter=require("./routes/user");
const adminData=require("./routes/admin");
const path=require('path');
const expressHbs=require('express-handlebars');

const app=express()

app.engine("handlebars",expressHbs.engine({
    defaultLayout: 'main',  // Specifies the default layout
    layoutsDir: path.join(__dirname, 'views', 'layouts')  // Specifies the layouts directory
}))

app.set('view engine','handlebars');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"public")));

app.use("/admin",adminData.route);
app.use(userRouter);

//below code is for handling wrong path tp redirect to error page using html 

// app.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(__dirname,"views","errorPage.html"));
// })

//below code is for setting error page for wrong path using templating engine pug

app.use((req,res,next)=>{
    console.log("error page file from templating engines");
    res.status(404).render("errorPage",{pageTitle:"page not found"});
})



app.listen(3000);