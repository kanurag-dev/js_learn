const express = require("express")
const app=express();
const PORT =3000;
const users= require('./routes/user')
 
const connectDB=require('./db')

app.use(express.json())
connectDB();

app.use('/api',users);


app.get('/',(req,res)=>{
    console.log("hello inside home route")
    res.send("hello this is a res send")
})

app.listen(PORT,()=>{
    console.log("server up")
})

