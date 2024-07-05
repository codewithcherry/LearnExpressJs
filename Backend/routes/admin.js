//this file to deal with admin related tasks routes

const express=require('express');
//using path core module to set the path

const path=require("path");
const router=express.Router();

router.get("/add-product",(req,res,next)=>{
    console.log("first middleware");
    res.sendFile(path.join(__dirname,"../","views",'add-product.html'));
})

router.post("/view-product",(req,res,next)=>{
    console.log("this is view product page")
    console.log(req.body)
    res.redirect("/")
    
})
module.exports=router