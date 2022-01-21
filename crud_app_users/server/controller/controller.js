// REQUIRING USERS MODEL
const Users=require("../model/model")

// MAKING API MIDDLEWARE TO ADD THE USERS THROUGH POST METHOD

const addUserApi=async(req,res,next)=>{
  const {name,email,gender,status}=req.body;
  console.log(req.body)

  try{
    if(!req.body){
        res.status(400).send({message:"fields cannot be empty"})
        
    }
    else if(!name||!email||!gender||!status){
      res.status(400).send({message:"fields cannot be empty"})
    }
    else{
      const  user=new Users(req.body)
      await user.save();
    res.redirect("/")
    }
  }catch(err){
       res.status(500).send({message:"cannot add user "})
  }
}


// API MIDDLEWARE TO FIND MULTIPLE USERS THROUGH GET REQUEST
const findUsers=async(req,res,next)=>{
    try{
        const users= await Users.find();
        res.status(200).send(users);
    }catch(err){
         return 
    }
    next();

}

// API MIDDLEWARE TO FIND THE SINGLE USER USING ID THROUGH GET REQUEST
const findUser=async(req,res,next)=>{
       const _id=req.params._id;
    try{
        const user=await Users.findById(_id);
        console.log(user)
        res.status(200).send(user);

    }catch(err){
        res.status(400).send({message:"user not found"})
    }
}
const updateUserApi=async(req,res,next)=>{
    const _id=req.params._id;
    try{
        const user=await Users.findByIdAndUpdate(_id,req.query,{useFindAndModify:false});
        if(user){
            res.redirect("/")
            return;
        }

       res.status(400).send({message:"cannot update data ! maybe user not found"})
    }catch(err){
        res.status(500).send({message:"cannot update data ! Database error"})
    }
    next();
}

// API MIDDLEWARE DELETE THE PARTICULAR USER USING ITS ID THROUGH GET REQUEST  
const deleteUserApi=async(req,res,next)=>{
    const _id=req.params._id;
    try{
        const user=await Users.findByIdAndDelete(_id);
        if(user){
            res.redirect('/')
            return;
        }
        res.status(400).send({message:"cannot update data ! maybe user not found"})
    }catch(err){
        res.status(500).send({message:"cannot delete data ! Database error"})
    }
    next();
}


module.exports={addUserApi,findUser,findUsers,deleteUserApi,updateUserApi}