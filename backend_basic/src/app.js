const express=require("express")
const noteModel=require("./models/note.model")

const app=express();
app.use(express.json())

app.post("/notes",async (req,res)=>{
    const data=req.body
    await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message:"done post"
    })
})
app.get("/notes",async (req,res)=>{
    const notes=await noteModel.find()
    res.status(200).json({
        message:"success",
        notes:notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const id=req.params.id
    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Deleted"
    })
}) 

app.patch("/notes/:id",async(req,res)=>{
    const id=req.params.id
    const desc=req.body.description
    await noteModel.findOneAndUpdate({_id:id},{description:desc})
    res.status(200).json({
        message:"patch"
    })
}) 


module.exports=app