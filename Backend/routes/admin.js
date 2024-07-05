//this file to deal with admin related tasks routes

const express=require('express');
//using path core module to set the path

const path=require("path");

//import utilspath module to set the root module  directory path to set path in easy way
const rootDir=require("../utils/utilpath")

const router=express.Router();

router.get("/add-product",(req,res,next)=>{
    console.log("first middleware");
    res.sendFile(path.join(rootDir,"views",'add-product.html'));
})

router.post("/view-product",(req,res,next)=>{
    console.log("this is view product page")
    console.log(req.body)
    res.redirect("/")
    
})
module.exports=router