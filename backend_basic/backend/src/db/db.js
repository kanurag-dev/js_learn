const mongoose =require("mongoose")

async function connectdb(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to db:", mongoose.connection.name);
    
}
module.exports=connectdb;
