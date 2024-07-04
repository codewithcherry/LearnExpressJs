//this code is to develop routes for user tasks
const express=require('express')
const router=express.Router();

router.get("/",(req,res,next)=>{
    console.log("first middleware");
    res.send("<html><body><h1>Welcome to express app</body></html>")
})

module.exports=router