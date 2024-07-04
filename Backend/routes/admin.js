//this file to deal with admin related tasks routes

const express=require('express')
const router=express.Router();

router.get("/add-product",(req,res,next)=>{
    console.log("first middleware");
    res.send("<html><body><h1>Welcome to express app</body></html>")
})

module.exports=router