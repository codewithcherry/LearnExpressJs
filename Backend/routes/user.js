//this code is to develop routes for user tasks
const express=require('express')
//path is the core module of nodejs to set the global directory for OS to join the path
const path=require('path')
//import utilspath module to set the root module  directory path to set path in easy way
const rootDir=require("../utils/utilpath")
const router=express.Router();

router.get("/",(req,res,next)=>{
    console.log("first middleware");
    res.sendFile(path.join(rootDir,'views','shop.html'))
})

module.exports=router