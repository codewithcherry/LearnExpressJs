//this file to deal with admin related tasks routes

const express=require('express')
const router=express.Router();

router.get("/add-product",(req,res,next)=>{
    console.log("first middleware");
    res.send("<html><body><form action='/view-product' method='POST'><input type=text name='product-title' placeholder='type here'><button type='submit'>send</button></form></body></html>")
})

router.post("/view-product",(req,res,next)=>{
    console.log("this is view product page")
    console.log(req.body)
    res.redirect("/")
    
})
module.exports=router