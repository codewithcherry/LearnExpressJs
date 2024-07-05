//this code is to develop routes for user tasks
const express=require('express')
//path is the core module of nodejs to set the global directory for OS to join the path
const path=require('path')
const router=express.Router();

router.get("/",(req,res,next)=>{
    console.log("first middleware");
    res.sendFile(path.join(__dirname,"../",'views','shop.html'))
})

module.exports=router