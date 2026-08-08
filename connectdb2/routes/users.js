const express=require("express")
const router=express.Router();
const User =require('../userModel/Models')

router.get('/users',async (req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users)
    }
    catch(error){
        console.error(error.message)
        res.send({
            success:false,
            error:error.message
        })
    }
})



router.get('/users/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const users=await User.findById(id);
        res.status(200).json(users)
    }
    catch(error){
        console.error(error.message)
        res.send({
            success:false,
            error:error.message
        })
    }
})

router.put('/users/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const data=req.body;
        const users=await User.findByIdAndUpdate(id,{name:data.name,age:data.age},{new:true});
        res.status(200).json(users)
    }
    catch(error){
        console.error(error.message)
        res.send({
            success:false,
            error:error.message
        })
    }
})

router.post('/users',async (req,res)=>{
    try{
        const data=req.body;
        const users=new User({name:data.name,age:data.age,weight:data.weight});
        await users.save()
        res.status(200).json(users)
    }
    catch(error){
        console.error(error.message)
        res.send({
            success:false,
            error:error.message
        })
    }
})

router.delete("/users/:id",async (req,res)=>{
    try{
        const id =req.params.id
        const deltedUser=await User.findByIdAndDelete(id)
        res.json(deltedUser);
    }
    catch(error){
        console.error(error.message)
        res.send({
            success:false,
            error:error.message
        })}
})

module.exports=router;