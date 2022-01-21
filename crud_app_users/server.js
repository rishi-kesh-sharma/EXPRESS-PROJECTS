// REQUIRE THE INSTALLED PACKAGES
const express=require("express")
const dotenv=require("dotenv")
const morgan=require("morgan")
const bodyparser=require("body-parser")

// REQUIRE THE INBUILT PACKAGES

const path=require("path")
const fs=require("fs")

// REQUIRE MODULES

const router=require("./server/routes/router")

// CREATING APP USING EXPRESS
const app=express();

// GIVE PATH TO DOTENV FILE
dotenv.config({path:"./config.env"})

// ACCESSING PORT FROM DOTENV FILE
const PORT=process.env.PORT||8080

// CONNECT TO DATABASE
require("./server/database/conn")

// LOG REQUESTS

app.use(morgan("tiny"));

// BODY PARSER
app.use(bodyparser.urlencoded({extended:true}))

// VIEW ENGINE
app.set("view engine","ejs")


// LOAD ASSETS

app.use(express.static(path.resolve(__dirname,'asset/css/style.css')))
app.use('/img',express.static(path.resolve(__dirname,'asset/img/')))
app.use('/js',express.static(path.resolve(__dirname,'asset/js/')))


// USING THE ROUTE
app.use(router);

// console.log(path.resolve(__dirname,'asset/css/style.css'));
 

app.listen(3000,(err)=>{
    console.log("server running on port "+PORT)
})