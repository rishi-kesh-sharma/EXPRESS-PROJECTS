const axios=require("axios");

// RENDER MIDDLEWARE TO RENDER HOME PAGE
exports.homeRoute=async(req,res)=>{
         try{
            const response= await axios.get("http://localhost:3000/api/users")
             const data=response.data;
             res.render("index",{users:data})
        }catch(err){
               console.log(err);
               res.send({message:"cannot get the page"})
           }
}

// RENDER MIDDLEWARE TO RENDER ADD USER PAGE
exports.addUser=(req,res)=>{
        res.render("add-user")
}

// RENDER MIDDLEWARE TO RENDER UPDATE PAGE
exports.updateUser=async(req,res,next)=>{
         const _id=req.params._id;
        try{
             const userData= await axios.get(`http://localhost:3000/api/user/${_id}`)
             res.render("update-user",{user:userData.data})
        }catch(err){
              res.send("<h1>cannot load page</h1>")
               }
        next();
}

