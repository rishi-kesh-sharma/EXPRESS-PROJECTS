const express=require("express")
const router=express.Router();
const {homeRoute,addUser,updateUser}=require("../services/render")
const {addUserApi,findUser,findUsers,deleteUserApi,updateUserApi}=require("../controller/controller");
const { home } = require("nodemon/lib/utils");

// VIEW ROUTES
router.get("/",homeRoute)
router.get("/add-user",addUser)
router.get("/update-user/:_id",updateUser)

// console.log(homeRoute)
// API ROUTES
router.get("/api/users",findUsers);
router.get("/api/user/:_id",findUser)
router.post("/api/add-user",addUserApi)
router.get("/api/update-user/:_id",updateUserApi)
router.get("/api/delete-user/:_id",deleteUserApi);

module.exports=router;