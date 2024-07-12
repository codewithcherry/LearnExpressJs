//this file to deal with admin related tasks routes

const express=require('express');
//using path core module to set the path

const path=require("path");

//variable to store the passing data to send to various request and users
const products=[];

//import utilspath module to set the root module  directory path to set path in easy way
const rootDir=require("../utils/utilpath")

const router=express.Router();

// below code is to handle the request for add product html file

// router.get("/add-product",(req,res,next)=>{
//     console.log("first middleware");
//     res.sendFile(path.join(rootDir,"views",'add-product.html'));
// })

//below code is to handle request to show add-products pug from templating engine rendering

router.get('/add-product',(ref,res,next)=>{
    console.log("rendering pug file from templating engine of add products");
    res.render("add-products",{pageTitle:"add products"});
})

router.post("/view-product",(req,res,next)=>{
    console.log("this is view product page")
    products.push({title: req.body.product})
    console.log(products);
    res.redirect("/")
    
})
exports.route=router
exports.productData=products