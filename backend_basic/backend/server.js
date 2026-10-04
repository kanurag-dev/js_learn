
require("dotenv").config();
const app=require("./src/app")
const connectdb=require("./src/db/db")
console.log(!!process.env.IMAGEKIT_PRIVATE_KEY);

connectdb()

app.listen(3000,()=>{
    console.log("up")
})

