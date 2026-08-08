const express=require("express")
const connectDB=require("./db.js")
const PORT=3000;
const app=express();
const router=require("./routes/users.js")


app.use(express.json())
connectDB();
app.use('/api',router)
app.get('/',(req,res)=>{
    console.log("get req")
    res.send("hello this is get req")
})

app.listen(PORT,()=>{
    console.log("server up");
})



